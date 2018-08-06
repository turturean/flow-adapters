/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createAction, createActionTypes } from '../helpers/action';
/**
 * @record
 */
export function IEntityActions() { }
function IEntityActions_tsickle_Closure_declarations() {
    /** @type {?} */
    IEntityActions.prototype.find;
    /** @type {?} */
    IEntityActions.prototype.findSuccess;
    /** @type {?} */
    IEntityActions.prototype.findError;
    /** @type {?} */
    IEntityActions.prototype.remove;
    /** @type {?} */
    IEntityActions.prototype.removeSuccess;
    /** @type {?} */
    IEntityActions.prototype.removeError;
    /** @type {?} */
    IEntityActions.prototype.add;
    /** @type {?} */
    IEntityActions.prototype.addSuccess;
    /** @type {?} */
    IEntityActions.prototype.addError;
    /** @type {?} */
    IEntityActions.prototype.update;
    /** @type {?} */
    IEntityActions.prototype.updateSuccess;
    /** @type {?} */
    IEntityActions.prototype.updateError;
}
/**
 * @record
 */
export function IEntityTypes() { }
function IEntityTypes_tsickle_Closure_declarations() {
    /** @type {?} */
    IEntityTypes.prototype.FIND;
    /** @type {?} */
    IEntityTypes.prototype.FIND_SUCCESS;
    /** @type {?} */
    IEntityTypes.prototype.FIND_ERROR;
    /** @type {?} */
    IEntityTypes.prototype.REMOVE;
    /** @type {?} */
    IEntityTypes.prototype.REMOVE_SUCCESS;
    /** @type {?} */
    IEntityTypes.prototype.REMOVE_ERROR;
    /** @type {?} */
    IEntityTypes.prototype.ADD;
    /** @type {?} */
    IEntityTypes.prototype.ADD_SUCCESS;
    /** @type {?} */
    IEntityTypes.prototype.ADD_ERROR;
    /** @type {?} */
    IEntityTypes.prototype.UPDATE;
    /** @type {?} */
    IEntityTypes.prototype.UPDATE_SUCCESS;
    /** @type {?} */
    IEntityTypes.prototype.UPDATE_ERROR;
}
/** @type {?} */
export var searchActionTypes = {
    FIND: 'find',
    FIND_SUCCESS: 'find success',
    FIND_ERROR: 'find error',
    REMOVE: 'remove',
    REMOVE_SUCCESS: 'remove success',
    REMOVE_ERROR: 'remove error',
    ADD: 'add',
    ADD_SUCCESS: 'add success',
    ADD_ERROR: 'add success',
    UPDATE: 'update',
    UPDATE_SUCCESS: 'update success',
    UPDATE_ERROR: 'update error'
};
/** @type {?} */
export var createSearchActionTypes = createActionTypes(searchActionTypes);
/**
 * @param {?} type
 * @return {?}
 */
export function makeSearchActions(type) {
    /** @type {?} */
    var find = createAction(type, searchActionTypes.FIND);
    /** @type {?} */
    var findSuccess = createAction(type, searchActionTypes.FIND_SUCCESS);
    /** @type {?} */
    var findError = createAction(type, searchActionTypes.FIND_ERROR);
    /** @type {?} */
    var remove = createAction(type, searchActionTypes.REMOVE);
    /** @type {?} */
    var removeSuccess = createAction(type, searchActionTypes.REMOVE_SUCCESS);
    /** @type {?} */
    var removeError = createAction(type, searchActionTypes.REMOVE_ERROR);
    /** @type {?} */
    var add = createAction(type, searchActionTypes.ADD);
    /** @type {?} */
    var addSuccess = createAction(type, searchActionTypes.ADD_SUCCESS);
    /** @type {?} */
    var addError = createAction(type, searchActionTypes.ADD_ERROR);
    /** @type {?} */
    var update = createAction(type, searchActionTypes.UPDATE);
    /** @type {?} */
    var updateSuccess = createAction(type, searchActionTypes.UPDATE_SUCCESS);
    /** @type {?} */
    var updateError = createAction(type, searchActionTypes.UPDATE_ERROR);
    return {
        find: find,
        findSuccess: findSuccess,
        findError: findError,
        remove: remove,
        removeSuccess: removeSuccess,
        removeError: removeError,
        add: add,
        addSuccess: addSuccess,
        addError: addError,
        update: update,
        updateSuccess: updateSuccess,
        updateError: updateError
    };
}
/**
 * @param {?=} type
 * @return {?}
 */
export function createEntityActionsFactory(type) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zsb3ctYWRhcHRlcnMvIiwic291cmNlcyI6WyJlbnRpdHkvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QzNCLFdBQWEsaUJBQWlCLEdBQWlCO0lBQzdDLElBQUksRUFBRSxNQUFNO0lBQ1osWUFBWSxFQUFFLGNBQWM7SUFDNUIsVUFBVSxFQUFFLFlBQVk7SUFFeEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxZQUFZLEVBQUUsY0FBYztJQUU1QixHQUFHLEVBQUUsS0FBSztJQUNWLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFNBQVMsRUFBRSxhQUFhO0lBRXhCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsWUFBWSxFQUFFLGNBQWM7Q0FDN0IsQ0FBQzs7QUFFRixXQUFhLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Ozs7O0FBRTVFLE1BQU0sNEJBQTRCLElBQUk7O0lBRXBDLElBQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBQ3hELElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7O0lBQ3ZFLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7O0lBQ25FLElBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzVELElBQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7O0lBQzNFLElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7O0lBQ3ZFLElBQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBQ3RELElBQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7O0lBQ3JFLElBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBQ2pFLElBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzVELElBQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7O0lBQzNFLElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFdkUsTUFBTSxDQUFDO1FBQ0wsSUFBSSxNQUFBO1FBQ0osV0FBVyxhQUFBO1FBQ1gsU0FBUyxXQUFBO1FBQ1QsTUFBTSxRQUFBO1FBQ04sYUFBYSxlQUFBO1FBQ2IsV0FBVyxhQUFBO1FBQ1gsR0FBRyxLQUFBO1FBQ0gsVUFBVSxZQUFBO1FBQ1YsUUFBUSxVQUFBO1FBQ1IsTUFBTSxRQUFBO1FBQ04sYUFBYSxlQUFBO1FBQ2IsV0FBVyxhQUFBO0tBQ1osQ0FBQTtDQUNGOzs7OztBQUVELE1BQU0scUNBQXFDLElBQWlCO0lBQWpCLHFCQUFBLEVBQUEsU0FBaUI7Ozs7SUFFMUQ7UUFDRSxNQUFNLENBQUMsdUJBQXVCLENBQWUsSUFBSSxDQUFDLENBQUM7S0FDcEQ7Ozs7SUFFRDtRQUNFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoQztJQUVELE1BQU0sQ0FBQztRQUNMLGNBQWMsZ0JBQUE7UUFDZCxVQUFVLFlBQUE7S0FDWCxDQUFBO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFjdGlvblR5cGVzXG59IGZyb20gJy4uL2hlbHBlcnMvYWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5QWN0aW9ucyB7XG4gIGZpbmQocGFyYW1zPyk7XG5cbiAgZmluZFN1Y2Nlc3MocGFyYW1zPyk7XG5cbiAgZmluZEVycm9yKHBhcmFtcz8pO1xuXG4gIHJlbW92ZShyZW1vdmU/KTtcblxuICByZW1vdmVTdWNjZXNzKHBhcmFtcz8pO1xuXG4gIHJlbW92ZUVycm9yKHBhcmFtcz8pO1xuXG4gIGFkZChyZW1vdmU/KTtcblxuICBhZGRTdWNjZXNzKHBhcmFtcz8pO1xuXG4gIGFkZEVycm9yKHBhcmFtcz8pO1xuXG4gIHVwZGF0ZShwYXJhbXM/KTtcblxuICB1cGRhdGVTdWNjZXNzKHBhcmFtcz8pO1xuXG4gIHVwZGF0ZUVycm9yKHBhcmFtcz8pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElFbnRpdHlUeXBlcyB7XG4gIEZJTkQ6IHN0cmluZztcbiAgRklORF9TVUNDRVNTOiBzdHJpbmc7XG4gIEZJTkRfRVJST1I6IHN0cmluZztcblxuICBSRU1PVkU6IHN0cmluZztcbiAgUkVNT1ZFX1NVQ0NFU1M6IHN0cmluZztcbiAgUkVNT1ZFX0VSUk9SOiBzdHJpbmc7XG5cbiAgQUREOiBzdHJpbmc7XG4gIEFERF9TVUNDRVNTOiBzdHJpbmc7XG4gIEFERF9FUlJPUjogc3RyaW5nO1xuXG4gIFVQREFURTogc3RyaW5nO1xuICBVUERBVEVfU1VDQ0VTUzogc3RyaW5nO1xuICBVUERBVEVfRVJST1I6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaEFjdGlvblR5cGVzOiBJRW50aXR5VHlwZXMgPSB7XG4gIEZJTkQ6ICdmaW5kJyxcbiAgRklORF9TVUNDRVNTOiAnZmluZCBzdWNjZXNzJyxcbiAgRklORF9FUlJPUjogJ2ZpbmQgZXJyb3InLFxuXG4gIFJFTU9WRTogJ3JlbW92ZScsXG4gIFJFTU9WRV9TVUNDRVNTOiAncmVtb3ZlIHN1Y2Nlc3MnLFxuICBSRU1PVkVfRVJST1I6ICdyZW1vdmUgZXJyb3InLFxuXG4gIEFERDogJ2FkZCcsXG4gIEFERF9TVUNDRVNTOiAnYWRkIHN1Y2Nlc3MnLFxuICBBRERfRVJST1I6ICdhZGQgc3VjY2VzcycsXG5cbiAgVVBEQVRFOiAndXBkYXRlJyxcbiAgVVBEQVRFX1NVQ0NFU1M6ICd1cGRhdGUgc3VjY2VzcycsXG4gIFVQREFURV9FUlJPUjogJ3VwZGF0ZSBlcnJvcidcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTZWFyY2hBY3Rpb25UeXBlcyA9IGNyZWF0ZUFjdGlvblR5cGVzKHNlYXJjaEFjdGlvblR5cGVzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZWFyY2hBY3Rpb25zKHR5cGUpOiBJRW50aXR5QWN0aW9ucyB7XG5cbiAgY29uc3QgZmluZCA9IGNyZWF0ZUFjdGlvbih0eXBlLCBzZWFyY2hBY3Rpb25UeXBlcy5GSU5EKTtcbiAgY29uc3QgZmluZFN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24odHlwZSwgc2VhcmNoQWN0aW9uVHlwZXMuRklORF9TVUNDRVNTKTtcbiAgY29uc3QgZmluZEVycm9yID0gY3JlYXRlQWN0aW9uKHR5cGUsIHNlYXJjaEFjdGlvblR5cGVzLkZJTkRfRVJST1IpO1xuICBjb25zdCByZW1vdmUgPSBjcmVhdGVBY3Rpb24odHlwZSwgc2VhcmNoQWN0aW9uVHlwZXMuUkVNT1ZFKTtcbiAgY29uc3QgcmVtb3ZlU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbih0eXBlLCBzZWFyY2hBY3Rpb25UeXBlcy5SRU1PVkVfU1VDQ0VTUyk7XG4gIGNvbnN0IHJlbW92ZUVycm9yID0gY3JlYXRlQWN0aW9uKHR5cGUsIHNlYXJjaEFjdGlvblR5cGVzLlJFTU9WRV9FUlJPUik7XG4gIGNvbnN0IGFkZCA9IGNyZWF0ZUFjdGlvbih0eXBlLCBzZWFyY2hBY3Rpb25UeXBlcy5BREQpO1xuICBjb25zdCBhZGRTdWNjZXNzID0gY3JlYXRlQWN0aW9uKHR5cGUsIHNlYXJjaEFjdGlvblR5cGVzLkFERF9TVUNDRVNTKTtcbiAgY29uc3QgYWRkRXJyb3IgPSBjcmVhdGVBY3Rpb24odHlwZSwgc2VhcmNoQWN0aW9uVHlwZXMuQUREX0VSUk9SKTtcbiAgY29uc3QgdXBkYXRlID0gY3JlYXRlQWN0aW9uKHR5cGUsIHNlYXJjaEFjdGlvblR5cGVzLlVQREFURSk7XG4gIGNvbnN0IHVwZGF0ZVN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24odHlwZSwgc2VhcmNoQWN0aW9uVHlwZXMuVVBEQVRFX1NVQ0NFU1MpO1xuICBjb25zdCB1cGRhdGVFcnJvciA9IGNyZWF0ZUFjdGlvbih0eXBlLCBzZWFyY2hBY3Rpb25UeXBlcy5VUERBVEVfRVJST1IpO1xuXG4gIHJldHVybiB7XG4gICAgZmluZCxcbiAgICBmaW5kU3VjY2VzcyxcbiAgICBmaW5kRXJyb3IsXG4gICAgcmVtb3ZlLFxuICAgIHJlbW92ZVN1Y2Nlc3MsXG4gICAgcmVtb3ZlRXJyb3IsXG4gICAgYWRkLFxuICAgIGFkZFN1Y2Nlc3MsXG4gICAgYWRkRXJyb3IsXG4gICAgdXBkYXRlLFxuICAgIHVwZGF0ZVN1Y2Nlc3MsXG4gICAgdXBkYXRlRXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW50aXR5QWN0aW9uc0ZhY3RvcnkodHlwZTogc3RyaW5nID0gJycpIHtcblxuICBmdW5jdGlvbiBnZXRBY3Rpb25UeXBlcygpOiBJRW50aXR5VHlwZXMge1xuICAgIHJldHVybiBjcmVhdGVTZWFyY2hBY3Rpb25UeXBlczxJRW50aXR5VHlwZXM+KHR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWN0aW9ucygpOiBJRW50aXR5QWN0aW9ucyB7XG4gICAgcmV0dXJuIG1ha2VTZWFyY2hBY3Rpb25zKHR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRBY3Rpb25UeXBlcyxcbiAgICBnZXRBY3Rpb25zXG4gIH1cbn1cbiJdfQ==