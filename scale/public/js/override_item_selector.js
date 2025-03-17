function overridePOSItemSelectorEvents() {
    if (
        typeof erpnext !== "undefined" &&
        typeof erpnext.PointOfSale !== "undefined" &&
        typeof erpnext.PointOfSale.ItemSelector !== "undefined"
    ) {
        const originalFilterItems = erpnext.PointOfSale.ItemSelector.prototype.filter_items;

        erpnext.PointOfSale.ItemSelector.prototype.filter_items = function ({ search_term = "" } = {}) {

            originalFilterItems.call(this, { search_term });
            if (this.search_index && typeof this.search_index === 'object') {
                for (const priceList in this.search_index) {
                    if (this.search_index.hasOwnProperty(priceList) && this.search_index[priceList] && typeof this.search_index[priceList] === 'object') {
                        for (const searchTerm in this.search_index[priceList]) {
                            if (searchTerm && searchTerm.startsWith("21")) {
                                delete this.search_index[priceList][searchTerm];
                            }
                        }
                    }
                }
            }
        };
        console.log("POS page loaded, custom filter_items function overridden");
    } else {
        setTimeout(overridePOSItemSelectorEvents, 200);
    }
}
overridePOSItemSelectorEvents();