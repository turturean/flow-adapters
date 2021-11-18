import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';

import {
  SearchError,
  SearchQuery,
  SearchSort,
  SearchState,
} from './search.models';

export interface SearchSelectors<T, S> {
  selectIds: MemoizedSelector<S, string[]>;
  selectEntities: MemoizedSelector<S, T[]>;
  selectError: MemoizedSelector<S, SearchError | null>;
  selectQuery: MemoizedSelector<S, SearchQuery>;
  selectSort: MemoizedSelector<S, SearchSort | null>;
  selectIsLoading: MemoizedSelector<S, boolean>;
  selectPagination: MemoizedSelector<
    S,
    { perPage: number; page: number; total: number }
  >;
}

export function createSearchSelectors<T>(
  stateKey: string
): SearchSelectors<T, SearchState<T>> {
  const selectState = createFeatureSelector<SearchState<T>>(stateKey);

  const error = createSelector(selectState, (state) => state.error);
  const isLoading = createSelector(selectState, (state) => state.isLoading);
  const pagination = createSelector(selectState, (state) => {
    const { perPage, page, total } = state;

    return {
      perPage,
      page,
      total,
    };
  });
  const query = createSelector(selectState, (state) => state.query);
  const sort = createSelector(selectState, (state) => state.sort);
  const ids = createSelector(selectState, (state) => state.ids);
  const entities = createSelector(selectState, (state) => state.entities);
  const selectEntities = createSelector(ids, entities, (ids, entities) =>
    ids.map((id) => entities[id])
  );

  return {
    selectIds: ids,
    selectEntities: selectEntities,
    selectError: error,
    selectQuery: query,
    selectSort: sort,
    selectIsLoading: isLoading,
    selectPagination: pagination,
  };
}
