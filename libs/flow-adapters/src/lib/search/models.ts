import { ActionCreator, TypedAction } from '@ngrx/store/src/models';
import { AdapterConfig } from '../types';

type EmptyObject = { [key: string]: any };

type QueryArgs = {
  query?: EmptyObject;
};
type PaginationArgs = {
  pagination: {
    page: number;
    perPage: number;
    total: number;
  };
};
type SearchQueryArgs<HasQuery> = HasQuery extends true ? QueryArgs : unknown;
type SearchPaginationArgs<HasPagination> = HasPagination extends true
  ? PaginationArgs
  : unknown;

type QueryState = {
  query: EmptyObject;
};
type PaginationState = {
  page: number;
  perPage: number;
  total: number;
};

export type SearchQueryState<isQuery> = isQuery extends true
  ? QueryState
  : unknown;
export type SearchPaginationState<isPagination> = isPagination extends true
  ? PaginationState
  : unknown;

export type SearchState<Entity> = {
  ids: string[];
  entities: { [key: string]: Entity };
  primaryKey: string;
  isLoading: boolean;
  error: Error | null;
  sort: SearchSort | null;
};

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

export type SearchActions<Entity, HasPagination, HasQuery> = {
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
};

export type SearchConfig<HasPagination, HasQuery> = {
  primaryKey?: string;
  hasPagination?: HasPagination;
  hasQuery?: HasQuery;
};

export type SearchAdapterOptions<AdapterName, AdapterState, SearchConfig> =
  AdapterConfig<AdapterName, AdapterState> & SearchConfig;
