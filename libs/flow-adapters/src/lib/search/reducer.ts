import { createReducer, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import {
  PaginationArgs,
  PaginationState,
  QueryArgs,
  SearchActions,
  SearchAdapterOptions,
  SearchConfig,
  SearchState,
} from './models';

export function createSearchReducer<
  Entity,
  HasPagination,
  HasQuery,
  AdapterName = string
>(
  initialState: SearchState<Entity, HasPagination, HasQuery>,
  actions: SearchActions<Entity, HasPagination, HasQuery>,
  options: SearchAdapterOptions<
    AdapterName,
    SearchState<Entity, HasPagination, HasQuery>,
    SearchConfig<HasPagination, HasQuery>
  >
) {
  return createReducer(
    initialState,
    on(actions.search, (state, action) => {
      const newState: Partial<any> = {
        isLoading: true,
      };

      if (options.hasPagination) {
        const { pagination } = action as PaginationArgs & TypedAction<string>;
        newState.page = pagination.page;
        newState.perPage = pagination.perPage;
      }

      if (options.hasPagination && options.hasQuery) {
        const { page, perPage } = initialState as PaginationState;
        newState.page = page;
        newState.perPage = perPage;
        newState.total = 0;
      }

      if (options.hasQuery) {
        const { query } = action as QueryArgs & TypedAction<string>;
        newState.query = query;
      }

      newState.error = null;
      // if (!query && !pagination && action.sort) {
      //   newState.sort = sort;
      //   newState.page = 1;
      // }

      return {
        ...state,
        ...newState,
      };
    }),
    on(actions.searchSuccess, (state, { entities }) => {
      const primaryKey = state.primaryKey;
      const ids = entities.map<string>((entity: { [key: string]: any }) =>
        String(entity[primaryKey])
      );
      const newEntities = entities.reduce(
        (accumulator, entity: { [key: string]: any }) => ({
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
