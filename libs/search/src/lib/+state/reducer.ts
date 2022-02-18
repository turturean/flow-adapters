import { createReducer, on } from '@ngrx/store';
import { Action, ActionReducer } from '@ngrx/store/src/models';

import { SearchActions, SearchEntity, SearchState } from './models';

export function createSearchReducer<
  State extends SearchState<Entity>,
  Entity = { [key: string]: any }
>(
  initialState: State,
  actions: SearchActions<Entity>
): ActionReducer<State, Action> {
  return createReducer(
    initialState,
    on(actions.search, (state, { query, pagination, sort }) => {
      const newState: Partial<SearchState<Entity>> = {
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
      const primaryKey = state.primaryKey as keyof Entity;
      const ids = entities.map<string>((entity) => String(entity[primaryKey]));
      const newEntities = entities.reduce<{ [key: string]: Entity }>(
        (accumulator, entity) => ({
          ...accumulator,
          [String(entity[primaryKey])]: entity,
        }),
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
    }))
  );
}
