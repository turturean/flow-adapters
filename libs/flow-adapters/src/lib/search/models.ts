import { ActionCreator, TypedAction } from '@ngrx/store/src/models';
import { AdapterConfig } from '../types';

export interface QueryArgs {
  query?: { [key: string]: any };
}
export interface PaginationArgs {
  pagination: {
    page: number;
    perPage: number;
    total: number;
  };
}
type SearchQueryArgs<HasQuery> = HasQuery extends true ? QueryArgs : unknown;
type SearchPaginationArgs<HasPagination> = HasPagination extends true
  ? PaginationArgs
  : unknown;

export type QueryState = {
  query?: { [key: string]: any };
};
export type PaginationState = {
  page?: number;
  perPage?: number | undefined;
  total?: number | undefined;
};

export type SearchQueryState<isQuery> = isQuery extends true
  ? QueryState
  : unknown;
export type SearchPaginationState<isPagination> = isPagination extends true
  ? PaginationState
  : unknown;

export type SearchEntitiesState<Entity = unknown> = {
  ids: string[];
  entities: { [key: string]: Entity };
  primaryKey: string;
  isLoading: boolean;
  error: Error | null;
  sort: SearchSort | null;
};

export type SearchState<
  Entity = { [key: string]: any },
  HasPagination = false,
  HasQuery = false
> = SearchEntitiesState<Entity> &
  SearchPaginationState<HasPagination> &
  SearchQueryState<HasQuery>;

export type SearchSort = {
  sortColumn: string;
  sortDir: string;
};

export type PropsSearch<HasPagination, HasQuery> = SearchQueryArgs<HasQuery> &
  SearchPaginationArgs<HasPagination>;

export type PropsSearchSuccess<Entity, HasPagination> = {
  entities: Entity[];
} & SearchPaginationArgs<HasPagination>;

export interface PropsSearchFailed {
  error: Error | null;
}

export interface SearchActions<
  Entity = unknown,
  HasPagination = false,
  HasQuery = false
> {
  search: ActionCreator<
    string,
    (
      props?: PropsSearch<HasPagination, HasQuery>
    ) => PropsSearch<HasPagination, HasQuery> & TypedAction<string>
  >;
  searchSuccess: ActionCreator<
    string,
    (
      props: PropsSearchSuccess<Entity, HasPagination>
    ) => PropsSearchSuccess<Entity, HasPagination> & TypedAction<string>
  >;
  searchFailed: ActionCreator<
    string,
    (props?: PropsSearchFailed) => PropsSearchFailed & TypedAction<string>
  >;
}

export type SearchConfig<HasPagination = false, HasQuery = false> = {
  primaryKey?: string;
  hasPagination?: HasPagination;
  hasQuery?: HasQuery;
};

export type SearchAdapterOptions<AdapterName, AdapterState, SearchConfig> =
  AdapterConfig<AdapterName, AdapterState> & SearchConfig;
