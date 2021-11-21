import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SearchSelectors, SearchState } from './search.models';

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
  const query = createSelector(selectState, (state) => state.query || {});
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
