function override_load_summary_of(doc, after_submission = false) {
    if (
        typeof erpnext !== "undefined" &&
        typeof erpnext.PointOfSale !== "undefined" &&
        typeof erpnext.PointOfSale.PastOrderSummary !== "undefined"
    ) {
        const original_load_summary_of = erpnext.PointOfSale.PastOrderSummary.prototype.load_summary_of;

        erpnext.PointOfSale.PastOrderSummary.prototype.load_summary_of = function (doc, after_submission = false) {
            debugger;
            original_load_summary_of(doc, after_submission);

            this.events.new_order();
            this.toggle_component(false);
            this.$component.find(".no-summary-placeholder").css("display", "flex");
            this.$summary_wrapper.css("display", "none");
        }
    }
    else {
        setTimeout(override_load_summary_of, 200);
    }
}

override_load_summary_of();