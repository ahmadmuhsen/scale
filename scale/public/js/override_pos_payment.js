function override_bind_events() {
    if (
        typeof erpnext !== "undefined" &&
        typeof erpnext.PointOfSale !== "undefined" &&
        typeof erpnext.PointOfSale.Payment !== "undefined"
    ) {
        const original_bind_events = erpnext.PointOfSale.Payment.prototype.bind_events;
        erpnext.PointOfSale.PastOrderSummary.prototype.bind_events = function () {
            debugger;
            original_bind_events.call(this);
            this.$component.on("click", ".submit-order-btn", () => {
                debugger;
                const doc = this.events.get_frm().doc;
                const paid_amount = doc.paid_amount;
                const items = doc.items;

                if (!this.validate_reqd_invoice_fields()) {
                    return;
                }

                if (!items.length || (paid_amount == 0 && doc.additional_discount_percentage != 100)) {
                    const message = items.length
                        ? __("You cannot submit the order without payment.")
                        : __("You cannot submit empty order.");
                    frappe.show_alert({ message, indicator: "orange" });
                    frappe.utils.play_sound("error");
                    return;
                }

                this.events.submit_invoice();
            });
        }

        console.log("POS page loaded, custom bind_events function overridden");
    }
    else {
        setTimeout(override_bind_events, 200);
    }
}

override_bind_events();