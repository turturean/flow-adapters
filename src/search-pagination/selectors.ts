import {List, Map} from "immutable";
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {IPaginationState, ISearchPaginationState} from './state';

export interface ISearchPaginationSelectors {
  getPagination: MemoizedSelector<object, IPaginationState>;
  getLoading: MemoizedSelector<object, boolean>;
  getQuery: MemoizedSelector<object, Map<string, any>>;
  getIds: MemoizedSelector<object, List<string>>;
}

export function createSelectorsFactory() {

  function getSelectors(state): ISearchPaginationSelectors {

    const ids = (state: ISearchPaginationState) => state.ids;

    const query = (state: ISearchPaginationState) => state.query;

    const loading = (state: ISearchPaginationState) => state.loading;

    const pagination = (state: ISearchPaginationState) => {

      return {
        page: state.page || 1,
        totals: state.totals || 0,
        limit: state.limit || 10,
      }
    };

    return {
      getPagination: createSelector(state, pagination),
      getLoading: createSelector(state, loading),
      getQuery: createSelector(state, query),
      getIds: createSelector(state, ids),
    }
  }

  return {getSelectors}
}
