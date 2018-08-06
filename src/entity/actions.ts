import {
  createAction,
  createActionTypes
} from '../helpers/action';

export interface IEntityActions {
  find(params?);

  findSuccess(params?);

  findError(params?);

  remove(remove?);

  removeSuccess(params?);

  removeError(params?);

  add(remove?);

  addSuccess(params?);

  addError(params?);

  update(params?);

  updateSuccess(params?);

  updateError(params?);
}

export interface IEntityTypes {
  FIND: string;
  FIND_SUCCESS: string;
  FIND_ERROR: string;

  REMOVE: string;
  REMOVE_SUCCESS: string;
  REMOVE_ERROR: string;

  ADD: string;
  ADD_SUCCESS: string;
  ADD_ERROR: string;

  UPDATE: string;
  UPDATE_SUCCESS: string;
  UPDATE_ERROR: string;
}

export const searchActionTypes: IEntityTypes = {
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

export const createSearchActionTypes = createActionTypes(searchActionTypes);

export function makeSearchActions(type): IEntityActions {

  const find = createAction(type, searchActionTypes.FIND);
  const findSuccess = createAction(type, searchActionTypes.FIND_SUCCESS);
  const findError = createAction(type, searchActionTypes.FIND_ERROR);
  const remove = createAction(type, searchActionTypes.REMOVE);
  const removeSuccess = createAction(type, searchActionTypes.REMOVE_SUCCESS);
  const removeError = createAction(type, searchActionTypes.REMOVE_ERROR);
  const add = createAction(type, searchActionTypes.ADD);
  const addSuccess = createAction(type, searchActionTypes.ADD_SUCCESS);
  const addError = createAction(type, searchActionTypes.ADD_ERROR);
  const update = createAction(type, searchActionTypes.UPDATE);
  const updateSuccess = createAction(type, searchActionTypes.UPDATE_SUCCESS);
  const updateError = createAction(type, searchActionTypes.UPDATE_ERROR);

  return {
    find,
    findSuccess,
    findError,
    remove,
    removeSuccess,
    removeError,
    add,
    addSuccess,
    addError,
    update,
    updateSuccess,
    updateError
  }
}

export function createEntityActionsFactory(type: string = '') {

  function getActionTypes(): IEntityTypes {
    return createSearchActionTypes<IEntityTypes>(type);
  }

  function getActions(): IEntityActions {
    return makeSearchActions(type);
  }

  return {
    getActionTypes,
    getActions
  }
}
