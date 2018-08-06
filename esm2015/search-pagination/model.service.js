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
export class SearchPaginationModelService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @template T
     * @param {?} selectors
     * @return {?}
     */
    getModels(selectors) {
        /** @type {?} */
        const $ids = this.store.select(selectors.getIds);
        /** @type {?} */
        const $loading = this.store.select(selectors.getLoading);
        /** @type {?} */
        const $query = this.store.select(selectors.getQuery);
        /** @type {?} */
        const $pagination = this.store.select(selectors.getPagination);
        return {
            $ids,
            $loading,
            $query,
            $pagination
        };
    }
    /**
     * @param {?} actions
     * @return {?}
     */
    dispatch(actions) {
        /** @type {?} */
        const clear = (params) => {
            this.store.dispatch(actions.clear(params));
        };
        /** @type {?} */
        const search = (params) => {
            this.store.dispatch(actions.search(params));
        };
        /** @type {?} */
        const searchError = (params) => {
            this.store.dispatch(actions.searchError(params));
        };
        /** @type {?} */
        const searchSuccess = (params) => {
            this.store.dispatch(actions.searchSuccess(params));
        };
        /** @type {?} */
        const searchReload = (params) => {
            this.store.dispatch(actions.searchReload(params));
        };
        return {
            clear,
            search,
            searchSuccess,
            searchError,
            searchReload
        };
    }
}
SearchPaginationModelService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SearchPaginationModelService.ctorParameters = () => [
    { type: Store }
];
function SearchPaginationModelService_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchPaginationModelService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zsb3ctYWRhcHRlcnMvIiwic291cmNlcyI6WyJzZWFyY2gtcGFnaW5hdGlvbi9tb2RlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBSWxDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNOzs7O0lBRUosWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtLQUNwQzs7Ozs7O0lBRUQsU0FBUyxDQUFJLFNBQXFDOztRQUNoRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBQ2pELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7UUFDekQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUNyRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFHL0QsTUFBTSxDQUFDO1lBQ0wsSUFBSTtZQUNKLFFBQVE7WUFDUixNQUFNO1lBQ04sV0FBVztTQUNaLENBQUM7S0FDSDs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBaUM7O1FBRXhDLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzVDLENBQUM7O1FBRUYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFPLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0MsQ0FBQzs7UUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQU8sRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRCxDQUFDOztRQUVGLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBTyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3BELENBQUM7O1FBRUYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFPLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkQsQ0FBQztRQUdGLE1BQU0sQ0FBQztZQUNMLEtBQUs7WUFDTCxNQUFNO1lBQ04sYUFBYTtZQUNiLFdBQVc7WUFDWCxZQUFZO1NBQ2IsQ0FBQTtLQUNGOzs7WUFuREYsVUFBVTs7OztZQWRILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0lTZWFyY2hQYWdpbmF0aW9uU2VsZWN0b3JzfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SVNlYXJjaFBhZ2luYXRpb25BY3Rpb25zfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaFBhZ2luYXRpb25Nb2RlbCB7XG4gICRpZHM6IE9ic2VydmFibGU8TGlzdDxzdHJpbmc+PjtcbiAgJGxvYWRpbmc6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICRxdWVyeTogT2JzZXJ2YWJsZTxhbnk+O1xuICAkcGFnaW5hdGlvbjogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFnaW5hdGlvbk1vZGVsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuICB9XG5cbiAgZ2V0TW9kZWxzPFQ+KHNlbGVjdG9yczogSVNlYXJjaFBhZ2luYXRpb25TZWxlY3RvcnMpOiBJU2VhcmNoUGFnaW5hdGlvbk1vZGVsIHtcbiAgICBjb25zdCAkaWRzID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3JzLmdldElkcyk7XG4gICAgY29uc3QgJGxvYWRpbmcgPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcnMuZ2V0TG9hZGluZyk7XG4gICAgY29uc3QgJHF1ZXJ5ID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3JzLmdldFF1ZXJ5KTtcbiAgICBjb25zdCAkcGFnaW5hdGlvbiA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdG9ycy5nZXRQYWdpbmF0aW9uKTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICRpZHMsXG4gICAgICAkbG9hZGluZyxcbiAgICAgICRxdWVyeSxcbiAgICAgICRwYWdpbmF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGRpc3BhdGNoKGFjdGlvbnM6IElTZWFyY2hQYWdpbmF0aW9uQWN0aW9ucyk6IElTZWFyY2hQYWdpbmF0aW9uQWN0aW9ucyB7XG5cbiAgICBjb25zdCBjbGVhciA9IChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5jbGVhcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VhcmNoID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5zZWFyY2gocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNlYXJjaEVycm9yID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5zZWFyY2hFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VhcmNoU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuc2VhcmNoU3VjY2VzcyhwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VhcmNoUmVsb2FkID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5zZWFyY2hSZWxvYWQocGFyYW1zKSk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFyLFxuICAgICAgc2VhcmNoLFxuICAgICAgc2VhcmNoU3VjY2VzcyxcbiAgICAgIHNlYXJjaEVycm9yLFxuICAgICAgc2VhcmNoUmVsb2FkXG4gICAgfVxuICB9XG59XG4iXX0=