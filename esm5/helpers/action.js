/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { mapValues } from 'lodash';
/**
 * @param {?} actionTypes
 * @return {?}
 */
export function createActionTypes(actionTypes) {
    return function (type) {
        return mapValues(actionTypes, function (action) {
            return actionTypeNameFactory(type, action);
        });
    };
}
/**
 * @param {?} type
 * @param {?} action
 * @return {?}
 */
function actionTypeNameFactory(type, action) {
    return type ? type + " " + action : "" + action;
}
/**
 * @param {?} type
 * @return {?}
 */
function makeClassAction(type) {
    return /** @class */ (function () {
        function class_1(payload) {
            this.payload = payload;
            this.type = type;
        }
        return class_1;
    }());
}
/**
 * @param {?} actionType
 * @return {?}
 */
function getActionTypeFactory(actionType) {
    /** @type {?} */
    var actionTypeClass = makeClassAction(actionType);
    return function (payload) {
        return new actionTypeClass(payload);
    };
}
/**
 * @param {?} type
 * @param {?} action
 * @return {?}
 */
export function createAction(type, action) {
    /** @type {?} */
    var actionType = actionTypeNameFactory(type, action);
    return getActionTypeFactory(actionType);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmxvdy1hZGFwdGVycy8iLCJzb3VyY2VzIjpbImhlbHBlcnMvYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7OztBQUVqQyxNQUFNLDRCQUE0QixXQUFXO0lBRTNDLE1BQU0sQ0FBQyxVQUFhLElBQUk7UUFFdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxNQUFNO1lBQ25DLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUMsQ0FBQyxDQUFDO0tBQ0osQ0FBQztDQUNIOzs7Ozs7QUFFRCwrQkFBK0IsSUFBSSxFQUFFLE1BQU07SUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUksSUFBSSxTQUFJLE1BQVEsQ0FBQyxDQUFDLENBQUMsS0FBRyxNQUFRLENBQUM7Q0FDakQ7Ozs7O0FBRUQseUJBQXlCLElBQUk7SUFFM0IsTUFBTTtRQUdKLGlCQUFtQixPQUFPO1lBQVAsWUFBTyxHQUFQLE9BQU8sQ0FBQTt3QkFGbkIsSUFBSTtTQUdWO3NCQXZCTDtLQXdCRyxBQUxNLElBS047Q0FDRjs7Ozs7QUFFRCw4QkFBOEIsVUFBVTs7SUFFdEMsSUFBTSxlQUFlLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXBELE1BQU0sQ0FBQyxVQUFVLE9BQU87UUFDdEIsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3JDLENBQUE7Q0FDRjs7Ozs7O0FBRUQsTUFBTSx1QkFBdUIsSUFBSSxFQUFFLE1BQU07O0lBQ3ZDLElBQU0sVUFBVSxHQUFHLHFCQUFxQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxNQUFNLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjdGlvbn0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQge21hcFZhbHVlc30gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvblR5cGVzKGFjdGlvblR5cGVzKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIDxUPih0eXBlKTogVCB8IGFueSB7XG5cbiAgICByZXR1cm4gbWFwVmFsdWVzKGFjdGlvblR5cGVzLCAoYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gYWN0aW9uVHlwZU5hbWVGYWN0b3J5KHR5cGUsIGFjdGlvbik7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGFjdGlvblR5cGVOYW1lRmFjdG9yeSh0eXBlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHR5cGUgPyBgJHt0eXBlfSAke2FjdGlvbn1gIDogYCR7YWN0aW9ufWA7XG59XG5cbmZ1bmN0aW9uIG1ha2VDbGFzc0FjdGlvbih0eXBlKSB7XG5cbiAgcmV0dXJuIGNsYXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICB0eXBlID0gdHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkKSB7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFjdGlvblR5cGVGYWN0b3J5KGFjdGlvblR5cGUpIHtcblxuICBjb25zdCBhY3Rpb25UeXBlQ2xhc3MgPSBtYWtlQ2xhc3NBY3Rpb24oYWN0aW9uVHlwZSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIG5ldyBhY3Rpb25UeXBlQ2xhc3MocGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbih0eXBlLCBhY3Rpb24pIHtcbiAgY29uc3QgYWN0aW9uVHlwZSA9IGFjdGlvblR5cGVOYW1lRmFjdG9yeSh0eXBlLCBhY3Rpb24pO1xuICByZXR1cm4gZ2V0QWN0aW9uVHlwZUZhY3RvcnkoYWN0aW9uVHlwZSk7XG59XG4iXX0=