function overridePOSItemSelectorEvents() {
    if (
        typeof erpnext !== "undefined" &&
        typeof erpnext.PointOfSale !== "undefined" &&
        typeof erpnext.PointOfSale.ItemSelector !== "undefined"
    ) {
        const originalFilterItems = erpnext.PointOfSale.ItemSelector.prototype.filter_items;

        erpnext.PointOfSale.ItemSelector.prototype.filter_items = function ({ search_term = "" } = {}) {

            originalFilterItems.call(this, { search_term });
            if (search_term.startsWith("21"))
                this.search_index[selling_price_list][search_term] = undefined;
        };
        console.log("POS page loaded, custom filter_items function overridden");
    } else {
        setTimeout(overridePOSItemSelectorEvents, 200);
    }
}
overridePOSItemSelectorEvents();