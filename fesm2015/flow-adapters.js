import { Injectable, NgModule, defineInjectable } from '@angular/core';
import { Store } from '@ngrx/store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlowAdaptersService {
    constructor() { }
}
FlowAdaptersService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
FlowAdaptersService.ctorParameters = () => [];
/** @nocollapse */ FlowAdaptersService.ngInjectableDef = defineInjectable({ factory: function FlowAdaptersService_Factory() { return new FlowAdaptersService(); }, token: FlowAdaptersService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SearchPaginationModelService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EntityModelService {
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
        const $entities = this.store.select(selectors.getEntities);
        return {
            $entities,
        };
    }
    /**
     * @param {?} actions
     * @return {?}
     */
    dispatch(actions) {
        /** @type {?} */
        const add = (params) => {
            this.store.dispatch(actions.add(params));
        };
        /** @type {?} */
        const addSuccess = (params) => {
            this.store.dispatch(actions.addSuccess(params));
        };
        /** @type {?} */
        const addError = (params) => {
            this.store.dispatch(actions.addError(params));
        };
        /** @type {?} */
        const find = (params) => {
            this.store.dispatch(actions.find(params));
        };
        /** @type {?} */
        const findSuccess = (params) => {
            this.store.dispatch(actions.findSuccess(params));
        };
        /** @type {?} */
        const findError = (params) => {
            this.store.dispatch(actions.findError(params));
        };
        /** @type {?} */
        const remove = (params) => {
            this.store.dispatch(actions.remove(params));
        };
        /** @type {?} */
        const removeError = (params) => {
            this.store.dispatch(actions.removeError(params));
        };
        /** @type {?} */
        const removeSuccess = (params) => {
            this.store.dispatch(actions.removeSuccess(params));
        };
        /** @type {?} */
        const update = (params) => {
            this.store.dispatch(actions.update(params));
        };
        /** @type {?} */
        const updateError = (params) => {
            this.store.dispatch(actions.updateError(params));
        };
        /** @type {?} */
        const updateSuccess = (params) => {
            this.store.dispatch(actions.updateSuccess(params));
        };
        return {
            add,
            addSuccess,
            addError,
            findError,
            find,
            findSuccess,
            remove,
            removeSuccess,
            removeError,
            updateSuccess,
            updateError,
            update
        };
    }
}
EntityModelService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EntityModelService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlowAdaptersModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { FlowAdaptersService, FlowAdaptersModule, EntityModelService as ɵb, SearchPaginationModelService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy1hZGFwdGVycy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZmxvdy1hZGFwdGVycy9saWIvZmxvdy1hZGFwdGVycy5zZXJ2aWNlLnRzIiwibmc6Ly9mbG93LWFkYXB0ZXJzL3NlYXJjaC1wYWdpbmF0aW9uL21vZGVsLnNlcnZpY2UudHMiLCJuZzovL2Zsb3ctYWRhcHRlcnMvZW50aXR5L21vZGVsLnNlcnZpY2UudHMiLCJuZzovL2Zsb3ctYWRhcHRlcnMvbGliL2Zsb3ctYWRhcHRlcnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmxvd0FkYXB0ZXJzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7SVNlYXJjaFBhZ2luYXRpb25TZWxlY3RvcnN9IGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJU2VhcmNoUGFnaW5hdGlvbkFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoUGFnaW5hdGlvbk1vZGVsIHtcbiAgJGlkczogT2JzZXJ2YWJsZTxMaXN0PHN0cmluZz4+O1xuICAkbG9hZGluZzogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgJHF1ZXJ5OiBPYnNlcnZhYmxlPGFueT47XG4gICRwYWdpbmF0aW9uOiBPYnNlcnZhYmxlPGFueT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hQYWdpbmF0aW9uTW9kZWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gIH1cblxuICBnZXRNb2RlbHM8VD4oc2VsZWN0b3JzOiBJU2VhcmNoUGFnaW5hdGlvblNlbGVjdG9ycyk6IElTZWFyY2hQYWdpbmF0aW9uTW9kZWwge1xuICAgIGNvbnN0ICRpZHMgPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcnMuZ2V0SWRzKTtcbiAgICBjb25zdCAkbG9hZGluZyA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdG9ycy5nZXRMb2FkaW5nKTtcbiAgICBjb25zdCAkcXVlcnkgPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcnMuZ2V0UXVlcnkpO1xuICAgIGNvbnN0ICRwYWdpbmF0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3JzLmdldFBhZ2luYXRpb24pO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgJGlkcyxcbiAgICAgICRsb2FkaW5nLFxuICAgICAgJHF1ZXJ5LFxuICAgICAgJHBhZ2luYXRpb25cbiAgICB9O1xuICB9XG5cbiAgZGlzcGF0Y2goYWN0aW9uczogSVNlYXJjaFBhZ2luYXRpb25BY3Rpb25zKTogSVNlYXJjaFBhZ2luYXRpb25BY3Rpb25zIHtcblxuICAgIGNvbnN0IGNsZWFyID0gKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmNsZWFyKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWFyY2ggPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnNlYXJjaChwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VhcmNoRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnNlYXJjaEVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWFyY2hTdWNjZXNzID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5zZWFyY2hTdWNjZXNzKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWFyY2hSZWxvYWQgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnNlYXJjaFJlbG9hZChwYXJhbXMpKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgY2xlYXIsXG4gICAgICBzZWFyY2gsXG4gICAgICBzZWFyY2hTdWNjZXNzLFxuICAgICAgc2VhcmNoRXJyb3IsXG4gICAgICBzZWFyY2hSZWxvYWRcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7TGlzdCwgTWFwfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtJRW50aXR5U2VsZWN0b3JzfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SUVudGl0eUFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5TW9kZWw8VD4ge1xuICAkZW50aXRpZXM6IMOCwqBPYnNlcnZhYmxlPE1hcDxzdHJpbmcsw4LCoExpc3Q8VD4+Pjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eU1vZGVsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuICB9XG5cbiAgZ2V0TW9kZWxzPFQ+KHNlbGVjdG9yczogSUVudGl0eVNlbGVjdG9yczxUPik6IElFbnRpdHlNb2RlbDxUPiB7XG4gICAgY29uc3QgJGVudGl0aWVzID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0b3JzLmdldEVudGl0aWVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAkZW50aXRpZXMsXG4gICAgfTtcbiAgfVxuXG4gIGRpc3BhdGNoKGFjdGlvbnM6IElFbnRpdHlBY3Rpb25zKTogSUVudGl0eUFjdGlvbnMge1xuXG4gICAgY29uc3QgYWRkID0gKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmFkZChwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuYWRkU3VjY2VzcyhwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmFkZEVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5maW5kKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZmluZFN1Y2Nlc3MocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRFcnJvciA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZmluZEVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmUgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnJlbW92ZShwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnJlbW92ZUVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVTdWNjZXNzID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5yZW1vdmVTdWNjZXNzKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGUgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZShwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZUVycm9yKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVTdWNjZXNzID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVTdWNjZXNzKHBhcmFtcykpO1xuICAgIH07XG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZCxcbiAgICAgIGFkZFN1Y2Nlc3MsXG4gICAgICBhZGRFcnJvcixcbiAgICAgIGZpbmRFcnJvcixcbiAgICAgIGZpbmQsXG4gICAgICBmaW5kU3VjY2VzcyxcbiAgICAgIHJlbW92ZSxcbiAgICAgIHJlbW92ZVN1Y2Nlc3MsXG4gICAgICByZW1vdmVFcnJvcixcbiAgICAgIHVwZGF0ZVN1Y2Nlc3MsXG4gICAgICB1cGRhdGVFcnJvcixcbiAgICAgIHVwZGF0ZVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFBhZ2luYXRpb25Nb2RlbFNlcnZpY2V9IGZyb20gXCIuLi9zZWFyY2gtcGFnaW5hdGlvbi9tb2RlbC5zZXJ2aWNlXCI7XG5pbXBvcnQge0VudGl0eU1vZGVsU2VydmljZX0gZnJvbSBcIi4uL2VudGl0eS9tb2RlbC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2VhcmNoUGFnaW5hdGlvbk1vZGVsU2VydmljZSxcbiAgICBFbnRpdHlNb2RlbFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGbG93QWRhcHRlcnNNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEOzs7O0lBaUJFLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FDcEM7Ozs7OztJQUVELFNBQVMsQ0FBSSxTQUFxQzs7UUFDaEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUNqRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7O1FBQ3pELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7UUFDckQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRy9ELE9BQU87WUFDTCxJQUFJO1lBQ0osUUFBUTtZQUNSLE1BQU07WUFDTixXQUFXO1NBQ1osQ0FBQztLQUNIOzs7OztJQUVELFFBQVEsQ0FBQyxPQUFpQzs7UUFFeEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUM1QyxDQUFDOztRQUVGLE1BQU0sTUFBTSxHQUFHLENB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