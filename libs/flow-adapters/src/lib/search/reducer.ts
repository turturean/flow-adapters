import { createReducer, on } from '@ngrx/store';
import { Action, ActionReducer } from '@ngrx/store/src/models';

import { SearchActions, SearchState } from './models';

export function createSearchReducer<
  State extends SearchState<Entity>,
  Entity = { [key: string]: any }
>(
  initialState: State,
  actions: SearchActions<Entity>
): ActionReducer<State, Action> {
  return createReducer(
    initialState,
    on(actions.search, (state, { query, sort }) => {
      const newState: Partial<SearchState<Entity>> = {
        isLoading: true,
        entities: {},
        ids: [],
        error: null,
      };

      if (query) {
        newState.query = query;
        newState.error = null;
      }

      if (!query && sort) {
        newState.sort = sort;
      }

      return {
        ...state,
        ...newState,
      };
    }),
    on(actions.searchSuccess, (state, { entities }) => {
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
