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
        return mapValues(actionTypes, (action) => {
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
    return type ? `${type} ${action}` : `${action}`;
}
/**
 * @param {?} type
 * @return {?}
 */
function makeClassAction(type) {
    return class {
        /**
         * @param {?} payload
         */
        constructor(payload) {
            this.payload = payload;
            this.type = type;
        }
    };
}
/**
 * @param {?} actionType
 * @return {?}
 */
function getActionTypeFactory(actionType) {
    /** @type {?} */
    const actionTypeClass = makeClassAction(actionType);
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
    const actionType = actionTypeNameFactory(type, action);
    return getActionTypeFactory(actionType);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmxvdy1hZGFwdGVycy8iLCJzb3VyY2VzIjpbImhlbHBlcnMvYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7OztBQUVqQyxNQUFNLDRCQUE0QixXQUFXO0lBRTNDLE1BQU0sQ0FBQyxVQUFhLElBQUk7UUFFdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN2QyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDLENBQUMsQ0FBQztLQUNKLENBQUM7Q0FDSDs7Ozs7O0FBRUQsK0JBQStCLElBQUksRUFBRSxNQUFNO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDO0NBQ2pEOzs7OztBQUVELHlCQUF5QixJQUFJO0lBRTNCLE1BQU0sQ0FBQzs7OztRQUdMLFlBQW1CLE9BQU87WUFBUCxZQUFPLEdBQVAsT0FBTyxDQUFBO3dCQUZuQixJQUFJO1NBR1Y7S0FDRixDQUFBO0NBQ0Y7Ozs7O0FBRUQsOEJBQThCLFVBQVU7O0lBRXRDLE1BQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRCxNQUFNLENBQUMsVUFBVSxPQUFPO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNyQyxDQUFBO0NBQ0Y7Ozs7OztBQUVELE1BQU0sdUJBQXVCLElBQUksRUFBRSxNQUFNOztJQUN2QyxNQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0NBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb259IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHttYXBWYWx1ZXN9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb25UeXBlcyhhY3Rpb25UeXBlcykge1xuXG4gIHJldHVybiBmdW5jdGlvbiA8VD4odHlwZSk6IFQgfCBhbnkge1xuXG4gICAgcmV0dXJuIG1hcFZhbHVlcyhhY3Rpb25UeXBlcywgKGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvblR5cGVOYW1lRmFjdG9yeSh0eXBlLCBhY3Rpb24pO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhY3Rpb25UeXBlTmFtZUZhY3RvcnkodHlwZSwgYWN0aW9uKSB7XG4gIHJldHVybiB0eXBlID8gYCR7dHlwZX0gJHthY3Rpb259YCA6IGAke2FjdGlvbn1gO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2xhc3NBY3Rpb24odHlwZSkge1xuXG4gIHJldHVybiBjbGFzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gICAgdHlwZSA9IHR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZCkge1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBY3Rpb25UeXBlRmFjdG9yeShhY3Rpb25UeXBlKSB7XG5cbiAgY29uc3QgYWN0aW9uVHlwZUNsYXNzID0gbWFrZUNsYXNzQWN0aW9uKGFjdGlvblR5cGUpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgIHJldHVybiBuZXcgYWN0aW9uVHlwZUNsYXNzKHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24odHlwZSwgYWN0aW9uKSB7XG4gIGNvbnN0IGFjdGlvblR5cGUgPSBhY3Rpb25UeXBlTmFtZUZhY3RvcnkodHlwZSwgYWN0aW9uKTtcbiAgcmV0dXJuIGdldEFjdGlvblR5cGVGYWN0b3J5KGFjdGlvblR5cGUpO1xufVxuIl19