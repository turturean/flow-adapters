import {Action} from "@ngrx/store";
import {mapValues} from 'lodash';

export function createActionTypes(actionTypes) {

  return function <T>(type): T | any {

    return mapValues(actionTypes, (action) => {
      return actionTypeNameFactory(type, action);
    });
  };
}

function actionTypeNameFactory(type, action) {
  return type ? `${type} ${action}` : `${action}`;
}

function makeClassAction(type) {

  return class implements Action {
    type = type;

    constructor(public payload) {
    }
  }
}

function getActionTypeFactory(actionType) {

  const actionTypeClass = makeClassAction(actionType);

  return function (payload) {
    return new actionTypeClass(payload);
  }
}

export function createAction(type, action) {
  const actionType = actionTypeNameFactory(type, action);
  return getActionTypeFactory(actionType);
}
