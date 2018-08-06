/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createAction, createActionTypes } from '../helpers/action';
/**
 * @record
 */
export function ISearchPaginationActions() { }
function ISearchPaginationActions_tsickle_Closure_declarations() {
    /** @type {?} */
    ISearchPaginationActions.prototype.search;
    /** @type {?} */
    ISearchPaginationActions.prototype.searchSuccess;
    /** @type {?} */
    ISearchPaginationActions.prototype.searchError;
    /** @type {?} */
    ISearchPaginationActions.prototype.searchReload;
    /** @type {?} */
    ISearchPaginationActions.prototype.clear;
}
/**
 * @record
 */
export function ISearchPaginationTypes() { }
function ISearchPaginationTypes_tsickle_Closure_declarations() {
    /** @type {?} */
    ISearchPaginationTypes.prototype.SEARCH;
    /** @type {?} */
    ISearchPaginationTypes.prototype.SEARCH_SUCCESS;
    /** @type {?} */
    ISearchPaginationTypes.prototype.SEARCH_ERROR;
    /** @type {?} */
    ISearchPaginationTypes.prototype.SEARCH_RELOAD;
    /** @type {?} */
    ISearchPaginationTypes.prototype.CLEAR;
}
/** @type {?} */
export const searchActionTypes = {
    SEARCH: 'search',
    SEARCH_SUCCESS: 'search success',
    SEARCH_ERROR: 'search error',
    SEARCH_RELOAD: 'search reload',
    CLEAR: 'clear',
};
/** @type {?} */
export const createSearchActionTypes = createActionTypes(searchActionTypes);
/**
 * @param {?} type
 * @return {?}
 */
export function makeSearchActions(type) {
    /** @type {?} */
    const search = createAction(type, searchActionTypes.SEARCH);
    /** @type {?} */
    const searchSuccess = createAction(type, searchActionTypes.SEARCH_SUCCESS);
    /** @type {?} */
    const searchError = createAction(type, searchActionTypes.SEARCH_ERROR);
    /** @type {?} */
    const searchReload = createAction(type, searchActionTypes.SEARCH_RELOAD);
    /** @type {?} */
    const clear = createAction(type, searchActionTypes.CLEAR);
    return {
        search,
        searchSuccess,
        searchError,
        searchReload,
        clear,
    };
}
/**
 * @param {?=} type
 * @return {?}
 */
export function createSearchPaginationActionsFactory(type = '') {
    /**
     * @return {?}
     */
    function getActionTypes() {
        return createSearchActionTypes(type);
    }
    /**
     * @return {?}
     */
    function getActions() {
        return makeSearchActions(type);
    }
    return {
        getActionTypes,
        getActions
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zsb3ctYWRhcHRlcnMvIiwic291cmNlcyI6WyJzZWFyY2gtcGFnaW5hdGlvbi9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0IzQixhQUFhLGlCQUFpQixHQUEyQjtJQUN2RCxNQUFNLEVBQUUsUUFBUTtJQUNoQixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLFlBQVksRUFBRSxjQUFjO0lBQzVCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLEtBQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQzs7QUFFRixhQUFhLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Ozs7O0FBRTVFLE1BQU0sNEJBQTRCLElBQUk7O0lBQ3BDLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzVELE1BQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7O0lBQzNFLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7O0lBQ3ZFLE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBQ3pFLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUQsTUFBTSxDQUFDO1FBQ0wsTUFBTTtRQUNOLGFBQWE7UUFDYixXQUFXO1FBQ1gsWUFBWTtRQUNaLEtBQUs7S0FDTixDQUFBO0NBQ0Y7Ozs7O0FBRUQsTUFBTSwrQ0FBK0MsT0FBZSxFQUFFOzs7O0lBRXBFO1FBQ0UsTUFBTSxDQUFDLHVCQUF1QixDQUF5QixJQUFJLENBQUMsQ0FBQztLQUM5RDs7OztJQUVEO1FBQ0UsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsTUFBTSxDQUFDO1FBQ0wsY0FBYztRQUNkLFVBQVU7S0FDWCxDQUFBO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFjdGlvblR5cGVzXG59IGZyb20gJy4uL2hlbHBlcnMvYWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoUGFnaW5hdGlvbkFjdGlvbnMge1xuICBzZWFyY2gocGFyYW1zPyk7XG5cbiAgc2VhcmNoU3VjY2VzcyhwYXJhbXM/KTtcblxuICBzZWFyY2hFcnJvcihwYXJhbXM/KTtcblxuICBzZWFyY2hSZWxvYWQocGFyYW1zPyk7XG5cbiAgY2xlYXIocGFyYW1zPyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaFBhZ2luYXRpb25UeXBlcyB7XG4gIFNFQVJDSDogc3RyaW5nO1xuICBTRUFSQ0hfU1VDQ0VTUzogc3RyaW5nO1xuICBTRUFSQ0hfRVJST1I6IHN0cmluZztcbiAgU0VBUkNIX1JFTE9BRDogc3RyaW5nO1xuICBDTEVBUjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoQWN0aW9uVHlwZXM6IElTZWFyY2hQYWdpbmF0aW9uVHlwZXMgPSB7XG4gIFNFQVJDSDogJ3NlYXJjaCcsXG4gIFNFQVJDSF9TVUNDRVNTOiAnc2VhcmNoIHN1Y2Nlc3MnLFxuICBTRUFSQ0hfRVJST1I6ICdzZWFyY2ggZXJyb3InLFxuICBTRUFSQ0hfUkVMT0FEOiAnc2VhcmNoIHJlbG9hZCcsXG4gIENMRUFSOiAnY2xlYXInLFxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlYXJjaEFjdGlvblR5cGVzID0gY3JlYXRlQWN0aW9uVHlwZXMoc2VhcmNoQWN0aW9uVHlwZXMpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlYXJjaEFjdGlvbnModHlwZSk6IElTZWFyY2hQYWdpbmF0aW9uQWN0aW9ucyB7XG4gIGNvbnN0IHNlYXJjaCA9IGNyZWF0ZUFjdGlvbih0eXBlLCBzZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0gpO1xuICBjb25zdCBzZWFyY2hTdWNjZXNzID0gY3JlYXRlQWN0aW9uKHR5cGUsIHNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVUNDRVNTKTtcbiAgY29uc3Qgc2VhcmNoRXJyb3IgPSBjcmVhdGVBY3Rpb24odHlwZSwgc2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0VSUk9SKTtcbiAgY29uc3Qgc2VhcmNoUmVsb2FkID0gY3JlYXRlQWN0aW9uKHR5cGUsIHNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9SRUxPQUQpO1xuICBjb25zdCBjbGVhciA9IGNyZWF0ZUFjdGlvbih0eXBlLCBzZWFyY2hBY3Rpb25UeXBlcy5DTEVBUik7XG5cbiAgcmV0dXJuIHtcbiAgICBzZWFyY2gsXG4gICAgc2VhcmNoU3VjY2VzcyxcbiAgICBzZWFyY2hFcnJvcixcbiAgICBzZWFyY2hSZWxvYWQsXG4gICAgY2xlYXIsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlYXJjaFBhZ2luYXRpb25BY3Rpb25zRmFjdG9yeSh0eXBlOiBzdHJpbmcgPSAnJykge1xuXG4gIGZ1bmN0aW9uIGdldEFjdGlvblR5cGVzKCk6IElTZWFyY2hQYWdpbmF0aW9uVHlwZXMge1xuICAgIHJldHVybiBjcmVhdGVTZWFyY2hBY3Rpb25UeXBlczxJU2VhcmNoUGFnaW5hdGlvblR5cGVzPih0eXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFjdGlvbnMoKTogSVNlYXJjaFBhZ2luYXRpb25BY3Rpb25zIHtcbiAgICByZXR1cm4gbWFrZVNlYXJjaEFjdGlvbnModHlwZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEFjdGlvblR5cGVzLFxuICAgIGdldEFjdGlvbnNcbiAgfVxufVxuIl19