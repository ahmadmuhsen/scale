function override_bind_events() {
    if (
        typeof erpnext !== "undefined" &&
        typeof erpnext.PointOfSale !== "undefined" &&
        typeof erpnext.PointOfSale.Payment !== "undefined"
    ) {
        const original_bind_events = erpnext.PointOfSale.Payment.prototype.bind_events;

        erpnext.PointOfSale.Payment.prototype.bind_events = function () {
            // Ensure prepare_dom has been called
            if (!this.$component || this.$component.length === 0) {
                console.error("DOM not ready in bind_events override");
                return;
            }

            // Call the original function to maintain existing behavior
            original_bind_events.call(this);

            // Ensure $component exists before attaching event listeners
            if (this.$component.length) {
                console.log("Custom bind_events executing correctly");

                this.$component.on("click", ".submit-order-btn", () => {
                    const doc = this.events.get_frm().doc;
                    const paid_amount = doc.paid_amount;
                    const items = doc.items;

                    if (!this.validate_reqd_invoice_fields()) {
                        return;
                    }

                    if (!items.length || (paid_amount == 0 && doc.additional_discount_percentage != 100)) {
                        const message = items.length
                            ? __("You cannot submit the order without payment.")
                            : __("You cannot submit an empty order.");
                        frappe.show_alert({ message, indicator: "orange" });
                        frappe.utils.play_sound("error");
                        return;
                    }

                    this.events.submit_invoice();
                });
            } else {
                console.error("this.$component is undefined in bind_events override");
            }
        };

        console.log("POS page loaded, custom bind_events function overridden");
    } else {
        setTimeout(override_bind_events, 200);
    }
}

// Run the function to override bind_events
override_bind_events();
