import { Injectable, NgModule, defineInjectable } from '@angular/core';
import { Store } from '@ngrx/store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlowAdaptersService = /** @class */ (function () {
    function FlowAdaptersService() {
    }
    FlowAdaptersService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    FlowAdaptersService.ctorParameters = function () { return []; };
    /** @nocollapse */ FlowAdaptersService.ngInjectableDef = defineInjectable({ factory: function FlowAdaptersService_Factory() { return new FlowAdaptersService(); }, token: FlowAdaptersService, providedIn: "root" });
    return FlowAdaptersService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EntityModelService = /** @class */ (function () {
    function EntityModelService(store) {
        this.store = store;
    }
    /**
     * @template T
     * @param {?} selectors
     * @return {?}
     */
    EntityModelService.prototype.getModels = /**
     * @template T
     * @param {?} selectors
     * @return {?}
     */
    function (selectors) {
        /** @type {?} */
        var $entities = this.store.select(selectors.getEntities);
        return {
            $entities: $entities,
        };
    };
    /**
     * @param {?} actions
     * @return {?}
     */
    EntityModelService.prototype.dispatch = /**
     * @param {?} actions
     * @return {?}
     */
    function (actions) {
        var _this = this;
        /** @type {?} */
        var add = function (params) {
            _this.store.dispatch(actions.add(params));
        };
        /** @type {?} */
        var addSuccess = function (params) {
            _this.store.dispatch(actions.addSuccess(params));
        };
        /** @type {?} */
        var addError = function (params) {
            _this.store.dispatch(actions.addError(params));
        };
        /** @type {?} */
        var find = function (params) {
            _this.store.dispatch(actions.find(params));
        };
        /** @type {?} */
        var findSuccess = function (params) {
            _this.store.dispatch(actions.findSuccess(params));
        };
        /** @type {?} */
        var findError = function (params) {
            _this.store.dispatch(actions.findError(params));
        };
        /** @type {?} */
        var remove = function (params) {
            _this.store.dispatch(actions.remove(params));
        };
        /** @type {?} */
        var removeError = function (params) {
            _this.store.dispatch(actions.removeError(params));
        };
        /** @type {?} */
        var removeSuccess = function (params) {
            _this.store.dispatch(actions.removeSuccess(params));
        };
        /** @type {?} */
        var update = function (params) {
            _this.store.dispatch(actions.update(params));
        };
        /** @type {?} */
        var updateError = function (params) {
            _this.store.dispatch(actions.updateError(params));
        };
        /** @type {?} */
        var updateSuccess = function (params) {
            _this.store.dispatch(actions.updateSuccess(params));
        };
        return {
            add: add,
            addSuccess: addSuccess,
            addError: addError,
            findError: findError,
            find: find,
            findSuccess: findSuccess,
            remove: remove,
            removeSuccess: removeSuccess,
            removeError: removeError,
            updateSuccess: updateSuccess,
            updateError: updateError,
            update: update
        };
    };
    EntityModelService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EntityModelService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return EntityModelService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlowAdaptersModule = /** @class */ (function () {
    function FlowAdaptersModule() {
    }
    FlowAdaptersModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    exports: [],
                    providers: [
                        SearchPaginationModelService,
                        EntityModelService
                    ]
                },] },
    ];
    return FlowAdaptersModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { FlowAdaptersService, FlowAdaptersModule, EntityModelService as ɵb, SearchPaginationModelService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy1hZGFwdGVycy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZmxvdy1hZGFwdGVycy9saWIvZmxvdy1hZGFwdGVycy5zZXJ2aWNlLnRzIiwibmc6Ly9mbG93LWFkYXB0ZXJzL3NlYXJjaC1wYWdpbmF0aW9uL21vZGVsLnNlcnZpY2UudHMiLCJuZzovL2Zsb3ctYWRhcHRlcnMvZW50aXR5L21vZGVsLnNlcnZpY2UudHMiLCJuZzovL2Zsb3ctYWRhcHRlcnMvbGliL2Zsb3ctYWRhcHRlcnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmxvd0FkYXB0ZXJzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7SVNlYXJjaFBhZ2luYXRpb25TZWxlY3RvcnN9IGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJU2VhcmNoUGFnaW5hdGlvbkFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoUGFnaW5hdGlvbk1vZGVsIHtcbiAgJGlkczogT2JzZXJ2YWJsZTxMaXN0PHN0cmluZz4+O1xuICAkbG9hZGluZzogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgJHF1ZXJ5OiBPYnNlcnZhYmxlPGFueT47XG4gICRwYWdpbmF0aW9uOiBPYnNlcnZhYmxlPGFueT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hQYWdpbmF0aW9uTW9kZWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gIH1cblxuICBnZXRNb2RlbHM8VD4oc2VsZWN0b3JzOiBJU2VhcmNoUGFnaW5hdGlvblNlbGVjdG9ycyk6IElTZWFyY2hQYWdpbmF0aW9uTW9kZWwge1xuICAgIGNvbnN0ICRpZHMgPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcnMuZ2V0SWRzKTtcbiAgICBjb25zdCAkbG9hZGluZyA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdG9ycy5nZXRMb2FkaW5nKTtcbiAgICBjb25zdCAkcXVlcnkgPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcnMuZ2V0UXVlcnkpO1xuICAgIGNvbnN0ICRwYWdpbmF0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3JzLmdldFBhZ2luYXRpb24pO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgJGlkcyxcbiAgICAgICRsb2FkaW5nLFxuICAgICAgJHF1ZXJ5LFxuICAgICAgJHBhZ2luYXRpb25cbiAgICB9O1xuICB9XG5cbiAgZGlzcGF0Y2goYWN0aW9uczogSVNlYXJjaFBhZ2luYXRpb25BY3Rpb25zKTogSVNlYXJjaFBhZ2luYXRpb25BY3Rpb25zIHtcblxuICAgIGNvbnN0IGNsZWFyID0gKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmNsZWFyKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWFyY2ggPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnNlYXJjaChwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VhcmNoRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnNlYXJjaEVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWFyY2hTdWNjZXNzID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5zZWFyY2hTdWNjZXNzKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWFyY2hSZWxvYWQgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnNlYXJjaFJlbG9hZChwYXJhbXMpKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgY2xlYXIsXG4gICAgICBzZWFyY2gsXG4gICAgICBzZWFyY2hTdWNjZXNzLFxuICAgICAgc2VhcmNoRXJyb3IsXG4gICAgICBzZWFyY2hSZWxvYWRcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7TGlzdCwgTWFwfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtJRW50aXR5U2VsZWN0b3JzfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SUVudGl0eUFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5TW9kZWw8VD4ge1xuICAkZW50aXRpZXM6IMOCwqBPYnNlcnZhYmxlPE1hcDxzdHJpbmcsw4LCoExpc3Q8VD4+Pjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eU1vZGVsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuICB9XG5cbiAgZ2V0TW9kZWxzPFQ+KHNlbGVjdG9yczogSUVudGl0eVNlbGVjdG9yczxUPik6IElFbnRpdHlNb2RlbDxUPiB7XG4gICAgY29uc3QgJGVudGl0aWVzID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3JzLmdldEVudGl0aWVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAkZW50aXRpZXMsXG4gICAgfTtcbiAgfVxuXG4gIGRpc3BhdGNoKGFjdGlvbnM6IElFbnRpdHlBY3Rpb25zKTogSUVudGl0eUFjdGlvbnMge1xuXG4gICAgY29uc3QgYWRkID0gKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmFkZChwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuYWRkU3VjY2VzcyhwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmFkZEVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5maW5kKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZmluZFN1Y2Nlc3MocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRFcnJvciA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZmluZEVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmUgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnJlbW92ZShwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnJlbW92ZUVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVTdWNjZXNzID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5yZW1vdmVTdWNjZXNzKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGUgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZShwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZUVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVTdWNjZXNzID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVTdWNjZXNzKHBhcmFtcykpO1xuICAgIH07XG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZCxcbiAgICAgIGFkZFN1Y2Nlc3MsXG4gICAgICBhZGRFcnJvcixcbiAgICAgIGZpbmRFcnJvcixcbiAgICAgIGZpbmQsXG4gICAgICBmaW5kU3VjY2VzcyxcbiAgICAgIHJlbW92ZSxcbiAgICAgIHJlbW92ZVN1Y2Nlc3MsXG4gICAgICByZW1vdmVFcnJvcixcbiAgICAgIHVwZGF0ZVN1Y2Nlc3MsXG4gICAgICB1cGRhdGVFcnJvcixcbiAgICAgIHVwZGF0ZVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFBhZ2luYXRpb25Nb2RlbFNlcnZpY2V9IGZyb20gXCIuLi9zZWFyY2gtcGFnaW5hdGlvbi9tb2RlbC5zZXJ2aWNlXCI7XG5pbXBvcnQge0VudGl0eU1vZGVsU2VydmljZX0gZnJvbSBcIi4uL2VudGl0eS9tb2RlbC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2VhcmNoUGFnaW5hdGlvbk1vZGVsU2VydmljZSxcbiAgICBFbnRpdHlNb2RlbFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGbG93QWRhcHRlcnNNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7OEJBSkQ7Ozs7Ozs7QUNBQTtJQWlCRSxzQ0FBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtLQUNwQzs7Ozs7O0lBRUQsZ0RBQVM7Ozs7O0lBQVQsVUFBYSxTQUFxQzs7UUFDaEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUNqRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7O1FBQ3pELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7UUFDckQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRy9ELE9BQU87WUFDTCxJQUFJLE1BQUE7WUFDSixRQUFRLFVBQUE7WUFDUixNQUFNLFFBQUE7WUFDTixXQUFXLGFBQUE7U0FDWixDQUFDO0tBQ0g7Ozs7O0lBRUQsK0NBQVE7Ozs7SUFBUixVQUFTLE9BQWlDO1FBQTFDLGlCQThCQzs7UUE1QkMsSUFBTSxLQUFLLEdBQUcsVUFBQyxNQUFNO1lBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENB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