import { createReducer, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import {
  PaginationState,
  PropsSearchSuccess,
  QueryState,
  SearchActions,
  SearchAdapterOptions,
  SearchConfig,
  SearchState,
} from './models';

export function createSearchReducer<
  Entity,
  AdapterName,
  HasPagination,
  HasQuery
>(
  initialState: SearchState<Entity, true, true>,
  actions: SearchActions<Entity>,
  options: SearchAdapterOptions<
    AdapterName,
    SearchState<Entity, HasPagination, HasQuery>,
    SearchConfig<HasPagination, HasQuery>
  >
) {
  return createReducer(
    initialState,
    on(actions.search, (state, action) => {
      const hasChangedQuery = options.hasQuery && action.query;
      const hasChangedPagination = options.hasPagination && action.pagination;
      const newState: Partial<SearchState<Entity, true, true>> = {
        isLoading: true,
      };

      if (hasChangedQuery) {
        newState.query = action.query || state.query;
      }

      if (hasChangedQuery && options.hasPagination) {
        newState.perPage = initialState.perPage;
        newState.page = initialState.page;
      }

      if (hasChangedPagination) {
        newState.perPage = action?.pagination?.perPage || initialState.perPage;
        newState.page = action?.pagination?.page || initialState.page;
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
    on(
      actions.searchSuccess,
      (state, action: PropsSearchSuccess<Entity> & TypedAction<string>) => {
        let newState: Partial<any> = {
          isLoading: false,
        };
        const primaryKey = state.primaryKey;

        newState.ids = action.entities.map<string>(
          (entity: { [key: string]: any }) => String(entity[primaryKey])
        );
        newState.entities = action.entities.reduce(
          (accumulator, entity: { [key: string]: any }) => ({
            ...accumulator,
            [String(entity[primaryKey])]: entity,
          }),
          {}
        );

        if (options.hasPagination) {
          const pageState: Partial<PaginationState> = {};
          pageState.page = action?.pagination?.page || initialState.page;
          pageState.perPage =
            action?.pagination?.perPage || initialState.perPage;
          pageState.total = action?.pagination?.total || initialState.total;

          newState = { ...newState, ...pageState };
        }

        return {
          ...state,
          ...newState,
        };
      }
    ),
    on(actions.searchFailed, (state, { error }) => {
      let newState: Partial<any> = {
        ids: [],
        entities: {},
        isLoading: false,
        error: error,
      };

      if (options.hasPagination) {
        const pageState: Partial<PaginationState> = {};
        pageState.page = initialState.page;
        pageState.perPage = initialState.perPage;
        pageState.total = initialState.total;

        newState = { ...newState, ...pageState };
      }

      if (options.hasQuery) {
        const queryState: Partial<QueryState> = {};
        queryState.query = {};

        newState = { ...newState, ...queryState };
      }

      return {
        ...state,
        ...newState,
      };
    })
  );
}
