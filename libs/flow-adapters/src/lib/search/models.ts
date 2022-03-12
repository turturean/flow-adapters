import { ActionCreator, TypedAction } from '@ngrx/store/src/models';
import { AdapterConfig } from '../types';

export interface QueryArgs {
  query?: { [key: string]: any };
}
export interface PaginationArgs {
  pagination?: {
    page: number;
    perPage: number;
  };
}

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

export type PropsSearch = QueryArgs & PaginationArgs;

export type PropsSearchSuccess<Entity> = {
  entities: Entity[];
} & PaginationArgs & { pagination?: { total: number } };

export interface PropsSearchFailed {
  error: Error | null;
}

export interface SearchActions<Entity = unknown> {
  search: ActionCreator<
    string,
    (props: PropsSearch) => PropsSearch & TypedAction<string>
  >;
  searchSuccess: ActionCreator<
    string,
    (
      props: PropsSearchSuccess<Entity>
    ) => PropsSearchSuccess<Entity> & TypedAction<string>
  >;
  searchFailed: ActionCreator<
    string,
    (props: PropsSearchFailed) => PropsSearchFailed & TypedAction<string>
  >;
}

export type SearchConfig<HasPagination = false, HasQuery = false> = {
  primaryKey?: string;
  hasPagination?: HasPagination;
  hasQuery?: HasQuery;
};

export type SearchAdapterOptions<AdapterName, AdapterState, SearchConfig> =
  AdapterConfig<AdapterName, AdapterState> & SearchConfig;
