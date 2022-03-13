import { AdapterConfig, FlowAction } from '../types';

export type SearchSort = {
  sortColumn: string;
  sortDir: 'asc' | 'desc';
};

export interface QueryArgs {
  query?: { [key: string]: any };
}
export interface PaginationArgs {
  pagination?: {
    page: number;
    perPage: number;
  };
}
export interface SortArgs {
  sort?: SearchSort;
}

export type QueryState = {
  query?: { [key: string]: any };
};
export type PaginationState = {
  page?: number;
  perPage?: number | undefined;
  total?: number | undefined;
};
export type SortState = {
  sort?: SearchSort | null;
};

export type SearchEntitiesState<Entity = unknown> = {
  ids: string[];
  entities: { [key: string]: Entity };
  isLoading: boolean;
  error: Error | null;
};
export type SearchQueryState<HasState> = HasState extends true ? QueryState : unknown;
export type SearchPaginationState<HasState> = HasState extends true ? PaginationState : unknown;
export type SearchSortState<HasState> = HasState extends true ? SortState : unknown;

export type PropsSearch<HasPagination, HasQuery, HasSort> = (HasQuery extends true ? QueryArgs : unknown) &
  (HasPagination extends true ? PaginationArgs : unknown) &
  (HasSort extends true ? SortArgs : unknown);

export type PropsSearchSuccess<Entity, HasPagination> = {
  entities: Entity[];
} & (HasPagination extends true ? PaginationArgs & { pagination?: { total: number } } : unknown);

export interface PropsSearchFailed {
  error?: Error | null;
}

export type SearchConfig<HasPagination = false, HasQuery = false, HasSort = false> = {
  primaryKey?: string;
  hasPagination?: HasPagination;
  hasQuery?: HasQuery;
  hasSort?: HasSort;
};

export type SearchAdapterOptions<AdapterName, AdapterState, SearchConfig> = AdapterConfig<AdapterName, AdapterState> &
  SearchConfig;

export interface SearchActions<Entity = unknown, HasPagination = false, HasQuery = false, HasSort = false> {
  search: FlowAction<PropsSearch<HasPagination, HasQuery, HasSort>>;
  searchSuccess: FlowAction<PropsSearchSuccess<Entity, HasPagination>>;
  searchFailed: FlowAction<PropsSearchFailed>;
}

export type SearchState<
  Entity = { [key: string]: any },
  HasPagination = false,
  HasQuery = false,
  HasSort = false
> = SearchEntitiesState<Entity> &
  SearchPaginationState<HasPagination> &
  SearchQueryState<HasQuery> &
  SearchSortState<HasSort>;
