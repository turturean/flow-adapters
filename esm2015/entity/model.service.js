/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
/**
 * @record
 * @template T
 */
export function IEntityModel() { }
function IEntityModel_tsickle_Closure_declarations() {
    /** @type {?} */
    IEntityModel.prototype.$entities;
}
export class EntityModelService {
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
function EntityModelService_tsickle_Closure_declarations() {
    /** @type {?} */
    EntityModelService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zsb3ctYWRhcHRlcnMvIiwic291cmNlcyI6WyJlbnRpdHkvbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUlsQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBUXpDLE1BQU07Ozs7SUFFSixZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0tBQ3BDOzs7Ozs7SUFFRCxTQUFTLENBQUksU0FBOEI7O1FBQ3pDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUzRCxNQUFNLENBQUM7WUFDTCxTQUFTO1NBQ1YsQ0FBQztLQUNIOzs7OztJQUVELFFBQVEsQ0FBQyxPQUF1Qjs7UUFFOUIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUMsQ0FBQzs7UUFFRixNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQU8sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNqRCxDQUFDOztRQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBTyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9DLENBQUM7O1FBRUYsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFPLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0MsQ0FBQzs7UUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQU8sRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRCxDQUFDOztRQUVGLE1BQU0sU0FBUyxHQUFHLENBQUMsTUFBTyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2hELENBQUM7O1FBRUYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFPLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0MsQ0FBQzs7UUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQU8sRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRCxDQUFDOztRQUVGLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBTyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3BELENBQUM7O1FBRUYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFPLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0MsQ0FBQzs7UUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQU8sRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRCxDQUFDOztRQUVGLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBTyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3BELENBQUM7UUFJRixNQUFNLENBQUM7WUFDTCxHQUFHO1lBQ0gsVUFBVTtZQUNWLFFBQVE7WUFDUixTQUFTO1lBQ1QsSUFBSTtZQUNKLFdBQVc7WUFDWCxNQUFNO1lBQ04sYUFBYTtZQUNiLFdBQVc7WUFDWCxhQUFhO1lBQ2IsV0FBVztZQUNYLE1BQU07U0FDUCxDQUFBO0tBQ0Y7OztZQWhGRixVQUFVOzs7O1lBWEgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7TGlzdCwgTWFwfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtJRW50aXR5U2VsZWN0b3JzfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SUVudGl0eUFjdGlvbnN9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5TW9kZWw8VD4ge1xuICAkZW50aXRpZXM6IMKgT2JzZXJ2YWJsZTxNYXA8c3RyaW5nLMKgTGlzdDxUPj4+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5TW9kZWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gIH1cblxuICBnZXRNb2RlbHM8VD4oc2VsZWN0b3JzOiBJRW50aXR5U2VsZWN0b3JzPFQ+KTogSUVudGl0eU1vZGVsPFQ+IHtcbiAgICBjb25zdCAkZW50aXRpZXMgPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RvcnMuZ2V0RW50aXRpZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICRlbnRpdGllcyxcbiAgICB9O1xuICB9XG5cbiAgZGlzcGF0Y2goYWN0aW9uczogSUVudGl0eUFjdGlvbnMpOiBJRW50aXR5QWN0aW9ucyB7XG5cbiAgICBjb25zdCBhZGQgPSAocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuYWRkKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRTdWNjZXNzID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5hZGRTdWNjZXNzKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRFcnJvciA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuYWRkRXJyb3IocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmQgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmZpbmQocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRTdWNjZXNzID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5maW5kU3VjY2VzcyhwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZEVycm9yID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5maW5kRXJyb3IocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMucmVtb3ZlKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVFcnJvciA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMucmVtb3ZlRXJyb3IocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVN1Y2Nlc3MgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnJlbW92ZVN1Y2Nlc3MocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVFcnJvciA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlRXJyb3IocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVN1Y2Nlc3MgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZVN1Y2Nlc3MocGFyYW1zKSk7XG4gICAgfTtcblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgYWRkLFxuICAgICAgYWRkU3VjY2VzcyxcbiAgICAgIGFkZEVycm9yLFxuICAgICAgZmluZEVycm9yLFxuICAgICAgZmluZCxcbiAgICAgIGZpbmRTdWNjZXNzLFxuICAgICAgcmVtb3ZlLFxuICAgICAgcmVtb3ZlU3VjY2VzcyxcbiAgICAgIHJlbW92ZUVycm9yLFxuICAgICAgdXBkYXRlU3VjY2VzcyxcbiAgICAgIHVwZGF0ZUVycm9yLFxuICAgICAgdXBkYXRlXG4gICAgfVxuICB9XG59XG4iXX0=