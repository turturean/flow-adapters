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
export var searchActionTypes = {
    SEARCH: 'search',
    SEARCH_SUCCESS: 'search success',
    SEARCH_ERROR: 'search error',
    SEARCH_RELOAD: 'search reload',
    CLEAR: 'clear',
};
/** @type {?} */
export var createSearchActionTypes = createActionTypes(searchActionTypes);
/**
 * @param {?} type
 * @return {?}
 */
export function makeSearchActions(type) {
    /** @type {?} */
    var search = createAction(type, searchActionTypes.SEARCH);
    /** @type {?} */
    var searchSuccess = createAction(type, searchActionTypes.SEARCH_SUCCESS);
    /** @type {?} */
    var searchError = createAction(type, searchActionTypes.SEARCH_ERROR);
    /** @type {?} */
    var searchReload = createAction(type, searchActionTypes.SEARCH_RELOAD);
    /** @type {?} */
    var clear = createAction(type, searchActionTypes.CLEAR);
    return {
        search: search,
        searchSuccess: searchSuccess,
        searchError: searchError,
        searchReload: searchReload,
        clear: clear,
    };
}
/**
 * @param {?=} type
 * @return {?}
 */
export function createSearchPaginationActionsFactory(type) {
    if (type === void 0) { type = ''; }
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
        getActionTypes: getActionTypes,
        getActions: getActions
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zsb3ctYWRhcHRlcnMvIiwic291cmNlcyI6WyJzZWFyY2gtcGFnaW5hdGlvbi9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0IzQixXQUFhLGlCQUFpQixHQUEyQjtJQUN2RCxNQUFNLEVBQUUsUUFBUTtJQUNoQixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLFlBQVksRUFBRSxjQUFjO0lBQzVCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLEtBQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQzs7QUFFRixXQUFhLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Ozs7O0FBRTVFLE1BQU0sNEJBQTRCLElBQUk7O0lBQ3BDLElBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzVELElBQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7O0lBQzNFLElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7O0lBQ3ZFLElBQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBQ3pFLElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUQsTUFBTSxDQUFDO1FBQ0wsTUFBTSxRQUFBO1FBQ04sYUFBYSxlQUFBO1FBQ2IsV0FBVyxhQUFBO1FBQ1gsWUFBWSxjQUFBO1FBQ1osS0FBSyxPQUFBO0tBQ04sQ0FBQTtDQUNGOzs7OztBQUVELE1BQU0sK0NBQStDLElBQWlCO0lBQWpCLHFCQUFBLEVBQUEsU0FBaUI7Ozs7SUFFcEU7UUFDRSxNQUFNLENBQUMsdUJBQXVCLENBQXlCLElBQUksQ0FBQyxDQUFDO0tBQzlEOzs7O0lBRUQ7UUFDRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEM7SUFFRCxNQUFNLENBQUM7UUFDTCxjQUFjLGdCQUFBO1FBQ2QsVUFBVSxZQUFBO0tBQ1gsQ0FBQTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uLFxuICBjcmVhdGVBY3Rpb25UeXBlc1xufSBmcm9tICcuLi9oZWxwZXJzL2FjdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaFBhZ2luYXRpb25BY3Rpb25zIHtcbiAgc2VhcmNoKHBhcmFtcz8pO1xuXG4gIHNlYXJjaFN1Y2Nlc3MocGFyYW1zPyk7XG5cbiAgc2VhcmNoRXJyb3IocGFyYW1zPyk7XG5cbiAgc2VhcmNoUmVsb2FkKHBhcmFtcz8pO1xuXG4gIGNsZWFyKHBhcmFtcz8pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hQYWdpbmF0aW9uVHlwZXMge1xuICBTRUFSQ0g6IHN0cmluZztcbiAgU0VBUkNIX1NVQ0NFU1M6IHN0cmluZztcbiAgU0VBUkNIX0VSUk9SOiBzdHJpbmc7XG4gIFNFQVJDSF9SRUxPQUQ6IHN0cmluZztcbiAgQ0xFQVI6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaEFjdGlvblR5cGVzOiBJU2VhcmNoUGFnaW5hdGlvblR5cGVzID0ge1xuICBTRUFSQ0g6ICdzZWFyY2gnLFxuICBTRUFSQ0hfU1VDQ0VTUzogJ3NlYXJjaCBzdWNjZXNzJyxcbiAgU0VBUkNIX0VSUk9SOiAnc2VhcmNoIGVycm9yJyxcbiAgU0VBUkNIX1JFTE9BRDogJ3NlYXJjaCByZWxvYWQnLFxuICBDTEVBUjogJ2NsZWFyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTZWFyY2hBY3Rpb25UeXBlcyA9IGNyZWF0ZUFjdGlvblR5cGVzKHNlYXJjaEFjdGlvblR5cGVzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZWFyY2hBY3Rpb25zKHR5cGUpOiBJU2VhcmNoUGFnaW5hdGlvbkFjdGlvbnMge1xuICBjb25zdCBzZWFyY2ggPSBjcmVhdGVBY3Rpb24odHlwZSwgc2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIKTtcbiAgY29uc3Qgc2VhcmNoU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbih0eXBlLCBzZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VTUyk7XG4gIGNvbnN0IHNlYXJjaEVycm9yID0gY3JlYXRlQWN0aW9uKHR5cGUsIHNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9FUlJPUik7XG4gIGNvbnN0IHNlYXJjaFJlbG9hZCA9IGNyZWF0ZUFjdGlvbih0eXBlLCBzZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfUkVMT0FEKTtcbiAgY29uc3QgY2xlYXIgPSBjcmVhdGVBY3Rpb24odHlwZSwgc2VhcmNoQWN0aW9uVHlwZXMuQ0xFQVIpO1xuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoLFxuICAgIHNlYXJjaFN1Y2Nlc3MsXG4gICAgc2VhcmNoRXJyb3IsXG4gICAgc2VhcmNoUmVsb2FkLFxuICAgIGNsZWFyLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWFyY2hQYWdpbmF0aW9uQWN0aW9uc0ZhY3RvcnkodHlwZTogc3RyaW5nID0gJycpIHtcblxuICBmdW5jdGlvbiBnZXRBY3Rpb25UeXBlcygpOiBJU2VhcmNoUGFnaW5hdGlvblR5cGVzIHtcbiAgICByZXR1cm4gY3JlYXRlU2VhcmNoQWN0aW9uVHlwZXM8SVNlYXJjaFBhZ2luYXRpb25UeXBlcz4odHlwZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBY3Rpb25zKCk6IElTZWFyY2hQYWdpbmF0aW9uQWN0aW9ucyB7XG4gICAgcmV0dXJuIG1ha2VTZWFyY2hBY3Rpb25zKHR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRBY3Rpb25UeXBlcyxcbiAgICBnZXRBY3Rpb25zXG4gIH1cbn1cbiJdfQ==