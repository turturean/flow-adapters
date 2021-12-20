import { ReducerTypes } from '@ngrx/store/src/reducer_creator';
import { on } from '@ngrx/store';
import { ActionCreator } from '@ngrx/store/src/models';

import { SearchEntityStateAdapter } from './search.actions';
import { SearchEntity, SearchState } from './search.models';

export function createSearchOns<T extends SearchEntity = SearchEntity>(
  initialState: SearchState<T>,
  actions: SearchEntityStateAdapter<T>
): ReducerTypes<SearchState<T>, readonly ActionCreator[]>[] {
  return [
    on(actions.search, (state, { query, pagination, sort }) => {
      const newState: Partial<SearchState<T>> = {
        isLoading: true,
      };

      if (pagination) {
        newState.page = pagination.page;
        newState.perPage = pagination.perPage;
      }

      if (query) {
        newState.query = query;
        newState.page = initialState.page;
        newState.perPage = initialState.perPage;
        newState.total = 0;
        newState.error = null;
      }

      if (!query && !pagination && sort) {
        newState.sort = sort;
        newState.page = 1;
      }

      return {
        ...state,
        ...newState,
      };
    }),
    on(actions.searchSuccess, (state, { entities, pagination }) => {
      const { primaryKey } = state;
      const ids = entities.map<string>(
        (entity: SearchEntity) => entity[primaryKey]
      );
      const newEntities = entities.reduce<{ [key: string]: T }>(
        (accumulator, entity) => {
          if (primaryKey in entity) {
            const key = entity[primaryKey];
            accumulator[key] = entity;
          }

          return accumulator;
        },
        {}
      );

      return {
        ...state,
        isLoading: false,
        page: pagination.page,
        perPage: pagination.perPage,
        ids: ids,
        entities: newEntities,
      };
    }),
    on(actions.searchFailed, (state, { error }) => ({
      ...state,
      isLoading: false,
      ids: [],
      entities: {},
      error: error,
    })),
  ];
}
