/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    var initial = {
        ids: List(),
        limit: 10,
        loading: false,
        page: 1,
        query: Map(),
        totals: 0
    };
    return tslib_1.__assign({}, initial, additionalState);
}
/**
 * @return {?}
 */
export function createInitialStateFactory() {
    return {
        getInitialState: function (additionalState) {
            return getInitialSearchPaginationState(additionalState);
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbG93LWFkYXB0ZXJzLyIsInNvdXJjZXMiOlsic2VhcmNoLXBhZ2luYXRpb24vc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjcEMsTUFBTSwwQ0FBMEMsZUFBZ0I7O0lBQzlELElBQU0sT0FBTyxHQUFHO1FBQ2QsR0FBRyxFQUFFLElBQUksRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsQ0FBQztRQUNQLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDWixNQUFNLEVBQUUsQ0FBQztLQUNWLENBQUM7SUFFRixNQUFNLHNCQUFLLE9BQU8sRUFBSyxlQUFlLEVBQUU7Q0FDekM7Ozs7QUFFRCxNQUFNO0lBRUosTUFBTSxDQUFDO1FBQ0wsZUFBZSxFQUFFLFVBQUMsZUFBd0M7WUFDeEQsTUFBTSxDQUFDLCtCQUErQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3pEO0tBQ0YsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaXN0LCBNYXB9IGZyb20gXCJpbW11dGFibGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUGFnaW5hdGlvblN0YXRlIHtcbiAgbGltaXQ6IG51bWJlcjtcbiAgcGFnZTogbnVtYmVyO1xuICB0b3RhbHM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoUGFnaW5hdGlvblN0YXRlIGV4dGVuZHMgSVBhZ2luYXRpb25TdGF0ZSB7XG4gIGlkczogTGlzdDxzdHJpbmc+XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIHF1ZXJ5OiBNYXA8c3RyaW5nLCBhbnk+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhbFNlYXJjaFBhZ2luYXRpb25TdGF0ZShhZGRpdGlvbmFsU3RhdGU/KSB7XG4gIGNvbnN0IGluaXRpYWwgPSB7XG4gICAgaWRzOiBMaXN0KCksXG4gICAgbGltaXQ6IDEwLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHBhZ2U6IDEsXG4gICAgcXVlcnk6IE1hcCgpLFxuICAgIHRvdGFsczogMFxuICB9O1xuXG4gIHJldHVybiB7Li4uaW5pdGlhbCwgLi4uYWRkaXRpb25hbFN0YXRlfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRJbml0aWFsU3RhdGU6IChhZGRpdGlvbmFsU3RhdGU/OiBJU2VhcmNoUGFnaW5hdGlvblN0YXRlKTogSVNlYXJjaFBhZ2luYXRpb25TdGF0ZSA9PiB7XG4gICAgICByZXR1cm4gZ2V0SW5pdGlhbFNlYXJjaFBhZ2luYXRpb25TdGF0ZShhZGRpdGlvbmFsU3RhdGUpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==