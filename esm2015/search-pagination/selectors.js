/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createSelector } from '@ngrx/store';
/**
 * @record
 */
export function ISearchPaginationSelectors() { }
function ISearchPaginationSelectors_tsickle_Closure_declarations() {
    /** @type {?} */
    ISearchPaginationSelectors.prototype.getPagination;
    /** @type {?} */
    ISearchPaginationSelectors.prototype.getLoading;
    /** @type {?} */
    ISearchPaginationSelectors.prototype.getQuery;
    /** @type {?} */
    ISearchPaginationSelectors.prototype.getIds;
}
/**
 * @return {?}
 */
export function createSelectorsFactory() {
    /**
     * @param {?} state
     * @return {?}
     */
    function getSelectors(state) {
        /** @type {?} */
        const ids = (state) => state.ids;
        /** @type {?} */
        const query = (state) => state.query;
        /** @type {?} */
        const loading = (state) => state.loading;
        /** @type {?} */
        const pagination = (state) => {
            return {
                page: state.page || 1,
                totals: state.totals || 0,
                limit: state.limit || 10,
            };
        };
        return {
            getPagination: createSelector(state, pagination),
            getLoading: createSelector(state, loading),
            getQuery: createSelector(state, query),
            getIds: createSelector(state, ids),
        };
    }
    return { getSelectors };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmxvdy1hZGFwdGVycy8iLCJzb3VyY2VzIjpbInNlYXJjaC1wYWdpbmF0aW9uL3NlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLGNBQWMsRUFBbUIsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU3RCxNQUFNOzs7OztJQUVKLHNCQUFzQixLQUFLOztRQUV6QixNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQTZCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1FBRXpELE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBNkIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7UUFFN0QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUE2QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOztRQUVqRSxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQTZCLEVBQUUsRUFBRTtZQUVuRCxNQUFNLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQztnQkFDckIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFDekIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRTthQUN6QixDQUFBO1NBQ0YsQ0FBQztRQUVGLE1BQU0sQ0FBQztZQUNMLGFBQWEsRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUNoRCxVQUFVLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDMUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNuQyxDQUFBO0tBQ0Y7SUFFRCxNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQTtDQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdCwgTWFwfSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lQYWdpbmF0aW9uU3RhdGUsIElTZWFyY2hQYWdpbmF0aW9uU3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hQYWdpbmF0aW9uU2VsZWN0b3JzIHtcbiAgZ2V0UGFnaW5hdGlvbjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIElQYWdpbmF0aW9uU3RhdGU+O1xuICBnZXRMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIGdldFF1ZXJ5OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgTWFwPHN0cmluZywgYW55Pj47XG4gIGdldElkczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIExpc3Q8c3RyaW5nPj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNGYWN0b3J5KCkge1xuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdG9ycyhzdGF0ZSk6IElTZWFyY2hQYWdpbmF0aW9uU2VsZWN0b3JzIHtcblxuICAgIGNvbnN0IGlkcyA9IChzdGF0ZTogSVNlYXJjaFBhZ2luYXRpb25TdGF0ZSkgPT4gc3RhdGUuaWRzO1xuXG4gICAgY29uc3QgcXVlcnkgPSAoc3RhdGU6IElTZWFyY2hQYWdpbmF0aW9uU3RhdGUpID0+IHN0YXRlLnF1ZXJ5O1xuXG4gICAgY29uc3QgbG9hZGluZyA9IChzdGF0ZTogSVNlYXJjaFBhZ2luYXRpb25TdGF0ZSkgPT4gc3RhdGUubG9hZGluZztcblxuICAgIGNvbnN0IHBhZ2luYXRpb24gPSAoc3RhdGU6IElTZWFyY2hQYWdpbmF0aW9uU3RhdGUpID0+IHtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZTogc3RhdGUucGFnZSB8fCAxLFxuICAgICAgICB0b3RhbHM6IHN0YXRlLnRvdGFscyB8fCAwLFxuICAgICAgICBsaW1pdDogc3RhdGUubGltaXQgfHwgMTAsXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBnZXRQYWdpbmF0aW9uOiBjcmVhdGVTZWxlY3RvcihzdGF0ZSwgcGFnaW5hdGlvbiksXG4gICAgICBnZXRMb2FkaW5nOiBjcmVhdGVTZWxlY3RvcihzdGF0ZSwgbG9hZGluZyksXG4gICAgICBnZXRRdWVyeTogY3JlYXRlU2VsZWN0b3Ioc3RhdGUsIHF1ZXJ5KSxcbiAgICAgIGdldElkczogY3JlYXRlU2VsZWN0b3Ioc3RhdGUsIGlkcyksXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtnZXRTZWxlY3RvcnN9XG59XG4iXX0=