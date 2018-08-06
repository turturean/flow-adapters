/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { List, Map } from "immutable";
/**
 * @record
 */
export function IPaginationState() { }
function IPaginationState_tsickle_Closure_declarations() {
    /** @type {?} */
    IPaginationState.prototype.limit;
    /** @type {?} */
    IPaginationState.prototype.page;
    /** @type {?} */
    IPaginationState.prototype.totals;
}
/**
 * @record
 */
export function ISearchPaginationState() { }
function ISearchPaginationState_tsickle_Closure_declarations() {
    /** @type {?} */
    ISearchPaginationState.prototype.ids;
    /** @type {?} */
    ISearchPaginationState.prototype.loading;
    /** @type {?} */
    ISearchPaginationState.prototype.query;
}
/**
 * @param {?=} additionalState
 * @return {?}
 */
export function getInitialSearchPaginationState(additionalState) {
    /** @type {?} */
    const initial = {
        ids: List(),
        limit: 10,
        loading: false,
        page: 1,
        query: Map(),
        totals: 0
    };
    return Object.assign({}, initial, additionalState);
}
/**
 * @return {?}
 */
export function createInitialStateFactory() {
    return {
        getInitialState: (additionalState) => {
            return getInitialSearchPaginationState(additionalState);
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbG93LWFkYXB0ZXJzLyIsInNvdXJjZXMiOlsic2VhcmNoLXBhZ2luYXRpb24vc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNwQyxNQUFNLDBDQUEwQyxlQUFnQjs7SUFDOUQsTUFBTSxPQUFPLEdBQUc7UUFDZCxHQUFHLEVBQUUsSUFBSSxFQUFFO1FBQ1gsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNaLE1BQU0sRUFBRSxDQUFDO0tBQ1YsQ0FBQztJQUVGLE1BQU0sbUJBQUssT0FBTyxFQUFLLGVBQWUsRUFBRTtDQUN6Qzs7OztBQUVELE1BQU07SUFFSixNQUFNLENBQUM7UUFDTCxlQUFlLEVBQUUsQ0FBQyxlQUF3QyxFQUEwQixFQUFFO1lBQ3BGLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN6RDtLQUNGLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdCwgTWFwfSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2luYXRpb25TdGF0ZSB7XG4gIGxpbWl0OiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgdG90YWxzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaFBhZ2luYXRpb25TdGF0ZSBleHRlbmRzIElQYWdpbmF0aW9uU3RhdGUge1xuICBpZHM6IExpc3Q8c3RyaW5nPlxuICBsb2FkaW5nOiBib29sZWFuO1xuICBxdWVyeTogTWFwPHN0cmluZywgYW55Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxTZWFyY2hQYWdpbmF0aW9uU3RhdGUoYWRkaXRpb25hbFN0YXRlPykge1xuICBjb25zdCBpbml0aWFsID0ge1xuICAgIGlkczogTGlzdCgpLFxuICAgIGxpbWl0OiAxMCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBwYWdlOiAxLFxuICAgIHF1ZXJ5OiBNYXAoKSxcbiAgICB0b3RhbHM6IDBcbiAgfTtcblxuICByZXR1cm4gey4uLmluaXRpYWwsIC4uLmFkZGl0aW9uYWxTdGF0ZX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5KCkge1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SW5pdGlhbFN0YXRlOiAoYWRkaXRpb25hbFN0YXRlPzogSVNlYXJjaFBhZ2luYXRpb25TdGF0ZSk6IElTZWFyY2hQYWdpbmF0aW9uU3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIGdldEluaXRpYWxTZWFyY2hQYWdpbmF0aW9uU3RhdGUoYWRkaXRpb25hbFN0YXRlKTtcbiAgICB9XG4gIH07XG59XG4iXX0=