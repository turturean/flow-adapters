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
export { EntityModelService };
function EntityModelService_tsickle_Closure_declarations() {
    /** @type {?} */
    EntityModelService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zsb3ctYWRhcHRlcnMvIiwic291cmNlcyI6WyJlbnRpdHkvbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUlsQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQVV2Qyw0QkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtLQUNwQzs7Ozs7O0lBRUQsc0NBQVM7Ozs7O0lBQVQsVUFBYSxTQUE4Qjs7UUFDekMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTNELE1BQU0sQ0FBQztZQUNMLFNBQVMsV0FBQTtTQUNWLENBQUM7S0FDSDs7Ozs7SUFFRCxxQ0FBUTs7OztJQUFSLFVBQVMsT0FBdUI7UUFBaEMsaUJBa0VDOztRQWhFQyxJQUFNLEdBQUcsR0FBRyxVQUFDLE1BQU07WUFDakIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzFDLENBQUM7O1FBRUYsSUFBTSxVQUFVLEdBQUcsVUFBQyxNQUFPO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNqRCxDQUFDOztRQUVGLElBQU0sUUFBUSxHQUFHLFVBQUMsTUFBTztZQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDL0MsQ0FBQzs7UUFFRixJQUFNLElBQUksR0FBRyxVQUFDLE1BQU87WUFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzNDLENBQUM7O1FBRUYsSUFBTSxXQUFXLEdBQUcsVUFBQyxNQUFPO1lBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRCxDQUFDOztRQUVGLElBQU0sU0FBUyxHQUFHLFVBQUMsTUFBTztZQUN4QixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQsQ0FBQzs7UUFFRixJQUFNLE1BQU0sR0FBRyxVQUFDLE1BQU87WUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzdDLENBQUM7O1FBRUYsSUFBTSxXQUFXLEdBQUcsVUFBQyxNQUFPO1lBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRCxDQUFDOztRQUVGLElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBTztZQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDcEQsQ0FBQzs7UUFFRixJQUFNLE1BQU0sR0FBRyxVQUFDLE1BQU87WUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzdDLENBQUM7O1FBRUYsSUFBTSxXQUFXLEdBQUcsVUFBQyxNQUFPO1lBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRCxDQUFDOztRQUVGLElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBTztZQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDcEQsQ0FBQztRQUlGLE1BQU0sQ0FBQztZQUNMLEdBQUcsS0FBQTtZQUNILFVBQVUsWUFBQTtZQUNWLFFBQVEsVUFBQTtZQUNSLFNBQVMsV0FBQTtZQUNULElBQUksTUFBQTtZQUNKLFdBQVcsYUFBQTtZQUNYLE1BQU0sUUFBQTtZQUNOLGFBQWEsZUFBQTtZQUNiLFdBQVcsYUFBQTtZQUNYLGFBQWEsZUFBQTtZQUNiLFdBQVcsYUFBQTtZQUNYLE1BQU0sUUFBQTtTQUNQLENBQUE7S0FDRjs7Z0JBaEZGLFVBQVU7Ozs7Z0JBWEgsS0FBSzs7NkJBQWI7O1NBWWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtMaXN0LCBNYXB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0lFbnRpdHlTZWxlY3RvcnN9IGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJRW50aXR5QWN0aW9uc30gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFbnRpdHlNb2RlbDxUPiB7XG4gICRlbnRpdGllczogwqBPYnNlcnZhYmxlPE1hcDxzdHJpbmcswqBMaXN0PFQ+Pj47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlNb2RlbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgfVxuXG4gIGdldE1vZGVsczxUPihzZWxlY3RvcnM6IElFbnRpdHlTZWxlY3RvcnM8VD4pOiBJRW50aXR5TW9kZWw8VD4ge1xuICAgIGNvbnN0ICRlbnRpdGllcyA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdG9ycy5nZXRFbnRpdGllcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgJGVudGl0aWVzLFxuICAgIH07XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb25zOiBJRW50aXR5QWN0aW9ucyk6IElFbnRpdHlBY3Rpb25zIHtcblxuICAgIGNvbnN0IGFkZCA9IChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5hZGQocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFN1Y2Nlc3MgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmFkZFN1Y2Nlc3MocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZEVycm9yID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5hZGRFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZCA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZmluZChwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZFN1Y2Nlc3MgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmZpbmRTdWNjZXNzKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kRXJyb3IgPSAocGFyYW1zPykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb25zLmZpbmRFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5yZW1vdmUocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUVycm9yID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5yZW1vdmVFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMucmVtb3ZlU3VjY2VzcyhwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGUocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZUVycm9yID0gKHBhcmFtcz8pID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVFcnJvcihwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlU3VjY2VzcyA9IChwYXJhbXM/KSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlU3VjY2VzcyhwYXJhbXMpKTtcbiAgICB9O1xuXG5cblxuICAgIHJldHVybiB7XG4gICAgICBhZGQsXG4gICAgICBhZGRTdWNjZXNzLFxuICAgICAgYWRkRXJyb3IsXG4gICAgICBmaW5kRXJyb3IsXG4gICAgICBmaW5kLFxuICAgICAgZmluZFN1Y2Nlc3MsXG4gICAgICByZW1vdmUsXG4gICAgICByZW1vdmVTdWNjZXNzLFxuICAgICAgcmVtb3ZlRXJyb3IsXG4gICAgICB1cGRhdGVTdWNjZXNzLFxuICAgICAgdXBkYXRlRXJyb3IsXG4gICAgICB1cGRhdGVcbiAgICB9XG4gIH1cbn1cbiJdfQ==