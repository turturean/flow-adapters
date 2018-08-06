import {
  createAction,
  createActionTypes
} from '../helpers/action';

export interface ISearchPaginationActions {
  search(params?);

  searchSuccess(params?);

  searchError(params?);

  searchReload(params?);

  clear(params?);
}

export interface ISearchPaginationTypes {
  SEARCH: string;
  SEARCH_SUCCESS: string;
  SEARCH_ERROR: string;
  SEARCH_RELOAD: string;
  CLEAR: string;
}

export const searchActionTypes: ISearchPaginationTypes = {
  SEARCH: 'search',
  SEARCH_SUCCESS: 'search success',
  SEARCH_ERROR: 'search error',
  SEARCH_RELOAD: 'search reload',
  CLEAR: 'clear',
};

export const createSearchActionTypes = createActionTypes(searchActionTypes);

export function makeSearchActions(type): ISearchPaginationActions {
  const search = createAction(type, searchActionTypes.SEARCH);
  const searchSuccess = createAction(type, searchActionTypes.SEARCH_SUCCESS);
  const searchError = createAction(type, searchActionTypes.SEARCH_ERROR);
  const searchReload = createAction(type, searchActionTypes.SEARCH_RELOAD);
  const clear = createAction(type, searchActionTypes.CLEAR);

  return {
    search,
    searchSuccess,
    searchError,
    searchReload,
    clear,
  }
}

export function createSearchPaginationActionsFactory(type: string = '') {

  function getActionTypes(): ISearchPaginationTypes {
    return createSearchActionTypes<ISearchPaginationTypes>(type);
  }

  function getActions(): ISearchPaginationActions {
    return makeSearchActions(type);
  }

  return {
    getActionTypes,
    getActions
  }
}
