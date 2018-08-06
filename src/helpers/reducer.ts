import {reduce, isArray, map, flow, isFuntion, concat, ha} from 'lodash';

export const flowConfiguration = flow(
  mergeConfiguration,
  mergeTargetActions,
);

export function mergeConfiguration(defaultConfiguration, newConfiguration) {

  return map(defaultConfiguration, ({action, reducers, targetAction = []}) => {
    const updateConfiguration = newConfiguration && newConfiguration.find((item) => item.action === action);
    const hasReducers = !!(updateConfiguration && updateConfiguration.reducers);
    const hasTargetAction = !!(updateConfiguration && updateConfiguration.targetAction);

    if (!isArray(reducers)) reducers = [reducers];
    if (!isArray(targetAction)) targetAction = [targetAction];

    if (hasReducers) {
      reducers = concat(reducers, updateConfiguration.reducers);
    }

    if (hasTargetAction) {
      targetAction = concat(targetAction, updateConfiguration.targetAction)
    }

    return {reducers, action, targetAction}
  });
}

export function mergeTargetActions(defaultConfiguration) {

  return reduce(defaultConfiguration, (result, {reducers, action, targetAction = []}) => {

    const mergeTargetActionReducer = map(targetAction, (action) => {
      return {
        reducers,
        action
      }
    });

    return [...result, {reducers, action}, ...mergeTargetActionReducer];
  }, []);
}

export function createReducer(type, handler, options) {
  const reducer = handler(...options);

  return function (state, action) {

    if (type === action.type) {
      return reducer(state, action);
    }

    return state;
  }
}

export function createReducers(type, handlers, options) {
  const reducers = isArray(handlers) ? map(handlers, (handler) => {
      return handler(...options);
    }) :
    [handlers(...options)];

  return function (state, action) {

    if (type === action.type) {
      return reduce(reducers, (resultState, reducer) => {
        return reducer(state, action);
      }, state);
    }

    return state;
  }
}

export function combineFlatReducers(reducers) {

  return function (state, action) {

    const newState = reduce(reducers, (result, reducer) => {
      return reducer(result, action);
    }, state);

    return newState === state ? state : newState;
  }
}
