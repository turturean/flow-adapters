/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createSelector } from '@ngrx/store';
/**
 * @record
 * @template T
 */
export function IEntitySelectors() { }
function IEntitySelectors_tsickle_Closure_declarations() {
    /** @type {?} */
    IEntitySelectors.prototype.getEntities;
}
/**
 * @return {?}
 */
export function createSelectorsFactory() {
    /**
     * @template T
     * @param {?} state
     * @return {?}
     */
    function getSelectors(state) {
        /** @type {?} */
        const entities = (state) => {
            return state.entities;
        };
        return {
            getEntities: createSelector(state, entities),
        };
    }
    return { getSelectors };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmxvdy1hZGFwdGVycy8iLCJzb3VyY2VzIjpbImVudGl0eS9zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxjQUFjLEVBQW1CLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBTzdELE1BQU07Ozs7OztJQUVKLHNCQUF5QixLQUFLOztRQUU1QixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQXNCLEVBQXdCLEVBQUU7WUFFaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDdkIsQ0FBQztRQUVGLE1BQU0sQ0FBQztZQUNMLFdBQVcsRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztTQUM3QyxDQUFBO0tBQ0Y7SUFFRCxNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQTtDQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdCwgTWFwfSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lFbnRpdHlTdGF0ZX0gZnJvbSBcIi4vc3RhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5U2VsZWN0b3JzPFQ+IHtcbiAgZ2V0RW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBNYXA8c3RyaW5nLCBMaXN0PFQ+Pj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNGYWN0b3J5KCkge1xuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdG9yczxUPihzdGF0ZSk6IElFbnRpdHlTZWxlY3RvcnM8VD4ge1xuXG4gICAgY29uc3QgZW50aXRpZXMgPSAoc3RhdGU6IElFbnRpdHlTdGF0ZTxUPik6IE1hcDxzdHJpbmcsIExpc3Q8VD4+ID0+IHtcblxuICAgICAgcmV0dXJuIHN0YXRlLmVudGl0aWVzO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0RW50aXRpZXM6IGNyZWF0ZVNlbGVjdG9yKHN0YXRlLCBlbnRpdGllcyksXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtnZXRTZWxlY3RvcnN9XG59XG4iXX0=