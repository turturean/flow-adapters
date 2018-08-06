import {mapValues, reduce, isFunction} from 'lodash';

export function combineAdapters<T>(adapterMap, type, options?): T {

  return mapValues(adapterMap, (adapterFactory, adapterKey) => {
    const params = (options && options[adapterKey]) || options;
    const settings = {type, ...params};

    return adapterFactory(settings);
  });
}

export function combineInitialState<T>(adapters): T {

  return reduce(adapters, (result, adapter) => {
    const hasFn = isFunction(adapter.getInitialState);
    const initial = hasFn ? adapter.getInitialState() : {};

    return {...result, ...initial};
  }, {});
}


export function combineAdapterActions<T>(adapters): T | any {
  return reduce(adapters, (result, adapter) => {
    const hasFn = isFunction(adapter.getActions);
    const actions = hasFn ? adapter.getActions() : {};

    return {...result, ...actions};
  }, {});
}

export function combineAdapterActionTypes<T>(adapters): T | any {

  return reduce(adapters, (result, adapter) => {
    const hasFn = isFunction(adapter.getActionTypes);
    const actionTypes = hasFn ? adapter.getActionTypes() : {};

    return {...result, ...actionTypes};
  }, {});
}
