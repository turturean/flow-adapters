(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store')) :
    typeof define === 'function' && define.amd ? define('flow-adapters', ['exports', '@angular/core', '@ngrx/store'], factory) :
    (factory((global['flow-adapters'] = {}),global.ng.core,null));
}(this, (function (exports,i0,store) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlowAdaptersService = (function () {
        function FlowAdaptersService() {
        }
        FlowAdaptersService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        FlowAdaptersService.ctorParameters = function () { return []; };
        /** @nocollapse */ FlowAdaptersService.ngInjectableDef = i0.defineInjectable({ factory: function FlowAdaptersService_Factory() { return new FlowAdaptersService(); }, token: FlowAdaptersService, providedIn: "root" });
        return FlowAdaptersService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SearchPaginationModelService = (function () {
        function SearchPaginationModelService(store$$1) {
            this.store = store$$1;
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        SearchPaginationModelService.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return SearchPaginationModelService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EntityModelService = (function () {
        function EntityModelService(store$$1) {
            this.store = store$$1;
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        EntityModelService.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return EntityModelService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlowAdaptersModule = (function () {
        function FlowAdaptersModule() {
        }
        FlowAdaptersModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.FlowAdaptersService = FlowAdaptersService;
    exports.FlowAdaptersModule = FlowAdaptersModule;
    exports.ɵb = EntityModelService;
    exports.ɵa = SearchPaginationModelService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy1hZGFwdGVycy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Zsb3ctYWRhcHRlcnMvbGliL2Zsb3ctYWRhcHRlcnMuc2VydmljZS50cyIsIm5nOi8vZmxvdy1hZGFwdGVycy9zZWFyY2gtcGFnaW5hdGlvbi9tb2RlbC5zZXJ2aWNlLnRzIiwibmc6Ly9mbG93LWFkYXB0ZXJzL2VudGl0eS9tb2RlbC5zZXJ2aWNlLnRzIiwibmc6Ly9mbG93LWFkYXB0ZXJzL2xpYi9mbG93LWFkYXB0ZXJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZsb3dBZGFwdGVyc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0lTZWFyY2hQYWdpbmF0aW9uU2VsZWN0b3JzfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SVNlYXJjaFBhZ2luYXRpb25BY3Rpb25zfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaFBhZ2luYXRpb25Nb2RlbCB7XG4gICRpZHM6IE9ic2VydmFibGU8TGlzdDxzdHJpbmc+PjtcbiAgJGxvYWRpbmc6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICRxdWVyeTogT2JzZXJ2YWJsZTxhbnk+O1xuICAkcGFnaW5hdGlvbjogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFnaW5hdGlvbk1vZGVsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuICB9XG5cbiAgZ2V0TW9kZWxzPFQ+KHNlbGVjdG9yczogSVNlYXJjaFBhZ2luYXRpb25TZWxlY3RvcnMpOiBJU2VhcmNoUGFnaW5hdGlvbk1vZGVsIHtcbiAgICBjb25zdCAkaWRzID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3JzLmdldElkcyk7XG4gICAgY29uc3QgJGxvYWRpbmcgPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcnMuZ2V0TG9hZGluZyk7XG4gICAgY29uc3QgJHF1ZXJ5ID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3JzLmdldFF1ZXJ5KTtcbiAgICBjb25zdCAkcGFnaW5hdGlvbiA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdG9ycy5nZXRQYWdpbmF0aW9uKTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICRpZHMsXG4gICAgICAkbG9hZGluZyxcbiAgICAgICRxdWVyeSxcbiAgICAgICRwYWdpbmF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGRpc3BhdGNoKGFjdGlvbnM6IElTZWFyY2hQYWdpbmF0aW9uQWN0aW9ucyk6IElTZWFyY2hQYWdpbmF0aW9uQWN0aW9ucyB7XG5cbiAgICBjb25zdCBjbGVhciA9IChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5jbGVhcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VhcmNoID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5zZWFyY2gocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNlYXJjaEVycm9yID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5zZWFyY2hFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VhcmNoU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuc2VhcmNoU3VjY2VzcyhwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VhcmNoUmVsb2FkID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5zZWFyY2hSZWxvYWQocGFyYW1zKSk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFyLFxuICAgICAgc2VhcmNoLFxuICAgICAgc2VhcmNoU3VjY2VzcyxcbiAgICAgIHNlYXJjaEVycm9yLFxuICAgICAgc2VhcmNoUmVsb2FkXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0xpc3QsIE1hcH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7SUVudGl0eVNlbGVjdG9yc30gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0lFbnRpdHlBY3Rpb25zfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eU1vZGVsPFQ+IHtcbiAgJGVudGl0aWVzOiDDgsKgT2JzZXJ2YWJsZTxNYXA8c3RyaW5nLMOCwqBMaXN0PFQ+Pj47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlNb2RlbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgfVxuXG4gIGdldE1vZGVsczxUPihzZWxlY3RvcnM6IElFbnRpdHlTZWxlY3RvcnM8VD4pOiBJRW50aXR5TW9kZWw8VD4ge1xuICAgIGNvbnN0ICRlbnRpdGllcyA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdG9ycy5nZXRFbnRpdGllcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgJGVudGl0aWVzLFxuICAgIH07XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb25zOiBJRW50aXR5QWN0aW9ucyk6IElFbnRpdHlBY3Rpb25zIHtcblxuICAgIGNvbnN0IGFkZCA9IChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5hZGQocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFN1Y2Nlc3MgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmFkZFN1Y2Nlc3MocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZEVycm9yID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5hZGRFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZCA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZmluZChwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZFN1Y2Nlc3MgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmZpbmRTdWNjZXNzKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmZpbmRFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5yZW1vdmUocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUVycm9yID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5yZW1vdmVFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMucmVtb3ZlU3VjY2VzcyhwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGUocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZUVycm9yID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlU3VjY2VzcyhwYXJhbXMpKTtcbiAgICB9O1xuXG5cblxuICAgIHJldHVybiB7XG4gICAgICBhZGQsXG4gICAgICBhZGRTdWNjZXNzLFxuICAgICAgYWRkRXJyb3IsXG4gICAgICBmaW5kRXJyb3IsXG4gICAgICBmaW5kLFxuICAgICAgZmluZFN1Y2Nlc3MsXG4gICAgICByZW1vdmUsXG4gICAgICByZW1vdmVTdWNjZXNzLFxuICAgICAgcmVtb3ZlRXJyb3IsXG4gICAgICB1cGRhdGVTdWNjZXNzLFxuICAgICAgdXBkYXRlRXJyb3IsXG4gICAgICB1cGRhdGVcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZWFyY2hQYWdpbmF0aW9uTW9kZWxTZXJ2aWNlfSBmcm9tIFwiLi4vc2VhcmNoLXBhZ2luYXRpb24vbW9kZWwuc2VydmljZVwiO1xuaW1wb3J0IHtFbnRpdHlNb2RlbFNlcnZpY2V9IGZyb20gXCIuLi9lbnRpdHkvbW9kZWwuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIFNlYXJjaFBhZ2luYXRpb25Nb2RlbFNlcnZpY2UsXG4gICAgRW50aXR5TW9kZWxTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmxvd0FkYXB0ZXJzTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwic3RvcmUiLCJTdG9yZSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztrQ0FKRDs7Ozs7OztBQ0FBO1FBaUJFLHNDQUFvQkMsUUFBaUI7WUFBakIsVUFBSyxHQUFMQSxRQUFLLENBQVk7U0FDcEM7Ozs7OztRQUVELGdEQUFTOzs7OztZQUFULFVBQWEsU0FBcUM7O2dCQUNoRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7O2dCQUNqRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7O2dCQUN6RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7O2dCQUNyRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRy9ELE9BQU87b0JBQ0wsSUFBSSxNQUFBO29CQUNKLFFBQVEsVUFBQTtvQkFDUixNQUFNLFFBQUE7b0JBQ04sV0FBVyxhQUFBO2lCQUNaLENBQUM7YUFDSDs7Ozs7UUFFRCwrQ0FBUTs7OztZQUFSLFVBQVMsT0FBaUM7Z0JBQTFDLGlCQThCQzs7Z0JBNUJDLElBQU0sS0FBSyxHQUFHLFVB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