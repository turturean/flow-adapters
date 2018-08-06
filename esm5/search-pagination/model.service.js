/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
/**
 * @record
 */
export function ISearchPaginationModel() { }
function ISearchPaginationModel_tsickle_Closure_declarations() {
    /** @type {?} */
    ISearchPaginationModel.prototype.$ids;
    /** @type {?} */
    ISearchPaginationModel.prototype.$loading;
    /** @type {?} */
    ISearchPaginationModel.prototype.$query;
    /** @type {?} */
    ISearchPaginationModel.prototype.$pagination;
}
var SearchPaginationModelService = /** @class */ (function () {
    function SearchPaginationModelService(store) {
        this.store = store;
    }
    /**
     * @template T
     * @param {?} selectors
     * @return {?}
     */
    SearchPaginationModelService.prototype.getModels = /**
     * @template T
     * @param {?} selectors
     * @return {?}
     */
    function (selectors) {
        /** @type {?} */
        var $ids = this.store.select(selectors.getIds);
        /** @type {?} */
        var $loading = this.store.select(selectors.getLoading);
        /** @type {?} */
        var $query = this.store.select(selectors.getQuery);
        /** @type {?} */
        var $pagination = this.store.select(selectors.getPagination);
        return {
            $ids: $ids,
            $loading: $loading,
            $query: $query,
            $pagination: $pagination
        };
    };
    /**
     * @param {?} actions
     * @return {?}
     */
    SearchPaginationModelService.prototype.dispatch = /**
     * @param {?} actions
     * @return {?}
     */
    function (actions) {
        var _this = this;
        /** @type {?} */
        var clear = function (params) {
            _this.store.dispatch(actions.clear(params));
        };
        /** @type {?} */
        var search = function (params) {
            _this.store.dispatch(actions.search(params));
        };
        /** @type {?} */
        var searchError = function (params) {
            _this.store.dispatch(actions.searchError(params));
        };
        /** @type {?} */
        var searchSuccess = function (params) {
            _this.store.dispatch(actions.searchSuccess(params));
        };
        /** @type {?} */
        var searchReload = function (params) {
            _this.store.dispatch(actions.searchReload(params));
        };
        return {
            clear: clear,
            search: search,
            searchSuccess: searchSuccess,
            searchError: searchError,
            searchReload: searchReload
        };
    };
    SearchPaginationModelService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SearchPaginationModelService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return SearchPaginationModelService;
}());
export { SearchPaginationModelService };
function SearchPaginationModelService_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchPaginationModelService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zsb3ctYWRhcHRlcnMvIiwic291cmNlcyI6WyJzZWFyY2gtcGFnaW5hdGlvbi9tb2RlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBSWxDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFhdkMsc0NBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FDcEM7Ozs7OztJQUVELGdEQUFTOzs7OztJQUFULFVBQWEsU0FBcUM7O1FBQ2hELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFDakQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztRQUN6RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBQ3JELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUcvRCxNQUFNLENBQUM7WUFDTCxJQUFJLE1BQUE7WUFDSixRQUFRLFVBQUE7WUFDUixNQUFNLFFBQUE7WUFDTixXQUFXLGFBQUE7U0FDWixDQUFDO0tBQ0g7Ozs7O0lBRUQsK0NBQVE7Ozs7SUFBUixVQUFTLE9BQWlDO1FBQTFDLGlCQThCQzs7UUE1QkMsSUFBTSxLQUFLLEdBQUcsVUFBQyxNQUFNO1lBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUM1QyxDQUFDOztRQUVGLElBQU0sTUFBTSxHQUFHLFVBQUMsTUFBTztZQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0MsQ0FBQzs7UUFFRixJQUFNLFdBQVcsR0FBRyxVQUFDLE1BQU87WUFDMUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2xELENBQUM7O1FBRUYsSUFBTSxhQUFhLEdBQUcsVUFBQyxNQUFPO1lBQzVCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNwRCxDQUFDOztRQUVGLElBQU0sWUFBWSxHQUFHLFVBQUMsTUFBTztZQUMzQixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkQsQ0FBQztRQUdGLE1BQU0sQ0FBQztZQUNMLEtBQUssT0FBQTtZQUNMLE1BQU0sUUFBQTtZQUNOLGFBQWEsZUFBQTtZQUNiLFdBQVcsYUFBQTtZQUNYLFlBQVksY0FBQTtTQUNiLENBQUE7S0FDRjs7Z0JBbkRGLFVBQVU7Ozs7Z0JBZEgsS0FBSzs7dUNBQWI7O1NBZWEsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtJU2VhcmNoUGFnaW5hdGlvblNlbGVjdG9yc30gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0lTZWFyY2hQYWdpbmF0aW9uQWN0aW9uc30gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hQYWdpbmF0aW9uTW9kZWwge1xuICAkaWRzOiBPYnNlcnZhYmxlPExpc3Q8c3RyaW5nPj47XG4gICRsb2FkaW5nOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAkcXVlcnk6IE9ic2VydmFibGU8YW55PjtcbiAgJHBhZ2luYXRpb246IE9ic2VydmFibGU8YW55Pjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhZ2luYXRpb25Nb2RlbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgfVxuXG4gIGdldE1vZGVsczxUPihzZWxlY3RvcnM6IElTZWFyY2hQYWdpbmF0aW9uU2VsZWN0b3JzKTogSVNlYXJjaFBhZ2luYXRpb25Nb2RlbCB7XG4gICAgY29uc3QgJGlkcyA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdG9ycy5nZXRJZHMpO1xuICAgIGNvbnN0ICRsb2FkaW5nID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3JzLmdldExvYWRpbmcpO1xuICAgIGNvbnN0ICRxdWVyeSA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdG9ycy5nZXRRdWVyeSk7XG4gICAgY29uc3QgJHBhZ2luYXRpb24gPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcnMuZ2V0UGFnaW5hdGlvbik7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAkaWRzLFxuICAgICAgJGxvYWRpbmcsXG4gICAgICAkcXVlcnksXG4gICAgICAkcGFnaW5hdGlvblxuICAgIH07XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb25zOiBJU2VhcmNoUGFnaW5hdGlvbkFjdGlvbnMpOiBJU2VhcmNoUGFnaW5hdGlvbkFjdGlvbnMge1xuXG4gICAgY29uc3QgY2xlYXIgPSAocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuY2xlYXIocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNlYXJjaCA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuc2VhcmNoKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWFyY2hFcnJvciA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuc2VhcmNoRXJyb3IocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNlYXJjaFN1Y2Nlc3MgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnNlYXJjaFN1Y2Nlc3MocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNlYXJjaFJlbG9hZCA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuc2VhcmNoUmVsb2FkKHBhcmFtcykpO1xuICAgIH07XG5cblxuICAgIHJldHVybiB7XG4gICAgICBjbGVhcixcbiAgICAgIHNlYXJjaCxcbiAgICAgIHNlYXJjaFN1Y2Nlc3MsXG4gICAgICBzZWFyY2hFcnJvcixcbiAgICAgIHNlYXJjaFJlbG9hZFxuICAgIH1cbiAgfVxufVxuIl19