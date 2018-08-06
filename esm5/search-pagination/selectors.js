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
        var ids = function (state) { return state.ids; };
        /** @type {?} */
        var query = function (state) { return state.query; };
        /** @type {?} */
        var loading = function (state) { return state.loading; };
        /** @type {?} */
        var pagination = function (state) {
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
    return { getSelectors: getSelectors };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmxvdy1hZGFwdGVycy8iLCJzb3VyY2VzIjpbInNlYXJjaC1wYWdpbmF0aW9uL3NlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLGNBQWMsRUFBbUIsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU3RCxNQUFNOzs7OztJQUVKLHNCQUFzQixLQUFLOztRQUV6QixJQUFNLEdBQUcsR0FBRyxVQUFDLEtBQTZCLElBQUssT0FBQSxLQUFLLENBQUMsR0FBRyxFQUFULENBQVMsQ0FBQzs7UUFFekQsSUFBTSxLQUFLLEdBQUcsVUFBQyxLQUE2QixJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUM7O1FBRTdELElBQU0sT0FBTyxHQUFHLFVBQUMsS0FBNkIsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFDOztRQUVqRSxJQUFNLFVBQVUsR0FBRyxVQUFDLEtBQTZCO1lBRS9DLE1BQU0sQ0FBQztnQkFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUNyQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUN6QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO2FBQ3pCLENBQUE7U0FDRixDQUFDO1FBRUYsTUFBTSxDQUFDO1lBQ0wsYUFBYSxFQUFFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDO1lBQ2hELFVBQVUsRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUMxQyxRQUFRLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ25DLENBQUE7S0FDRjtJQUVELE1BQU0sQ0FBQyxFQUFDLFlBQVksY0FBQSxFQUFDLENBQUE7Q0FDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3QsIE1hcH0gZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3Rvcn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJUGFnaW5hdGlvblN0YXRlLCBJU2VhcmNoUGFnaW5hdGlvblN0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoUGFnaW5hdGlvblNlbGVjdG9ycyB7XG4gIGdldFBhZ2luYXRpb246IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBJUGFnaW5hdGlvblN0YXRlPjtcbiAgZ2V0TG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICBnZXRRdWVyeTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIE1hcDxzdHJpbmcsIGFueT4+O1xuICBnZXRJZHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBMaXN0PHN0cmluZz4+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSgpIHtcblxuICBmdW5jdGlvbiBnZXRTZWxlY3RvcnMoc3RhdGUpOiBJU2VhcmNoUGFnaW5hdGlvblNlbGVjdG9ycyB7XG5cbiAgICBjb25zdCBpZHMgPSAoc3RhdGU6IElTZWFyY2hQYWdpbmF0aW9uU3RhdGUpID0+IHN0YXRlLmlkcztcblxuICAgIGNvbnN0IHF1ZXJ5ID0gKHN0YXRlOiBJU2VhcmNoUGFnaW5hdGlvblN0YXRlKSA9PiBzdGF0ZS5xdWVyeTtcblxuICAgIGNvbnN0IGxvYWRpbmcgPSAoc3RhdGU6IElTZWFyY2hQYWdpbmF0aW9uU3RhdGUpID0+IHN0YXRlLmxvYWRpbmc7XG5cbiAgICBjb25zdCBwYWdpbmF0aW9uID0gKHN0YXRlOiBJU2VhcmNoUGFnaW5hdGlvblN0YXRlKSA9PiB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2U6IHN0YXRlLnBhZ2UgfHwgMSxcbiAgICAgICAgdG90YWxzOiBzdGF0ZS50b3RhbHMgfHwgMCxcbiAgICAgICAgbGltaXQ6IHN0YXRlLmxpbWl0IHx8IDEwLFxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0UGFnaW5hdGlvbjogY3JlYXRlU2VsZWN0b3Ioc3RhdGUsIHBhZ2luYXRpb24pLFxuICAgICAgZ2V0TG9hZGluZzogY3JlYXRlU2VsZWN0b3Ioc3RhdGUsIGxvYWRpbmcpLFxuICAgICAgZ2V0UXVlcnk6IGNyZWF0ZVNlbGVjdG9yKHN0YXRlLCBxdWVyeSksXG4gICAgICBnZXRJZHM6IGNyZWF0ZVNlbGVjdG9yKHN0YXRlLCBpZHMpLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7Z2V0U2VsZWN0b3JzfVxufVxuIl19