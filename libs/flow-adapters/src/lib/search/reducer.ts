import { createReducer, on } from '@ngrx/store';
import { Action, ActionReducer, TypedAction } from '@ngrx/store/src/models';

import {
  PropsSearch,
  SearchActions,
  SearchConfig,
  SearchPaginationState,
  SearchQueryState,
  SearchState,
} from './models';

function searchQueryReducer(
  state: SearchQueryState<true>,
  { query }: PropsSearch<false, true> & TypedAction<string>
): SearchQueryState<true> {
  return state;
}

export function createSearchReducer<Entity, HasPagination, HasQuery>(
  initialState: SearchState<Entity> &
    SearchPaginationState<HasPagination> &
    SearchQueryState<HasQuery>,
  actions: SearchActions<Entity, HasPagination, HasQuery>,
  options: SearchConfig<HasPagination, HasQuery>
): ActionReducer<
  SearchState<Entity> &
    SearchPaginationState<HasPagination> &
    SearchQueryState<HasQuery>,
  Action
> {
  type State = SearchState<Entity> &
    SearchPaginationState<HasPagination> &
    SearchQueryState<HasQuery>;

  return createReducer(
    initialState,
    on(actions.search, (state, action) => {
      let newState: Partial<State> = {
        primaryKey: '',
        // isLoading: true,
        // entities: {},
        // ids: [],
        // error: null,
      };

      if (options.hasQuery && action) {
        // newState = {...newState, ...searchQueryReducer(state, action)};
      }

      // if (!action && sort) {
      //   newState.sort = action.;
      // }

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
