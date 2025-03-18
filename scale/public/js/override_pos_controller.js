function override_init_payments() {
    if (
        typeof erpnext !== "undefined" &&
        typeof erpnext.PointOfSale !== "undefined" &&
        typeof erpnext.PointOfSale.Controller !== "undefined"
    ) {
        const original_init_payments = erpnext.PointOfSale.Controller.prototype.init_payments;

        erpnext.PointOfSale.Controller.prototype.init_payments = function () {
            this.payment = new erpnext.PointOfSale.Payment({
                wrapper: this.$components_wrapper,
                events: {
                    get_frm: () => this.frm || {},
                    get_customer_details: () => this.customer_details || {},
                    toggle_other_sections: e => {
                        e ? (this.item_details.$component.is(":visible") && this.item_details.$component.css("display", "none"),
                        this.item_selector.toggle_component(!1)) : this.item_selector.toggle_component(!0)
                    }
                    ,
                    submit_invoice: () => {
                        this.frm.save("Submit").then(e => {
                            this.toggle_components(!1),
                            this.order_summary.toggle_component(!0),
                            this.order_summary.load_summary_of(this.frm.doc, !0),
                            frappe.show_alert({
                                indicator: "green",
                                message: __("POS invoice {0} created succesfully", [e.doc.name])
                            })
                        }
                        )
                    }
                }
            })
        };

        console.log("POS page loaded, custom init_payments function overridden");
    } else {
        setTimeout(override_init_payments, 200);
    }
}

override_init_payments();
