import { ActionCreator, TypedAction } from '@ngrx/store/src/models';
import {
  PropsSearch,
  PropsSearchFailed,
  PropsSearchSuccess,
  SearchAdapterOptions,
  SearchState,
} from 'flow-adapters';

export type SearchPagination = {
  page: number;
  perPage: number;
};

export type SearchSort = {
  sortColumn: string;
  sortDir: string;
};

export type SearchError = {
  [key: string]: unknown;
};

export interface PropsSearchWithPagination extends PropsSearch {
  pagination?: SearchPagination;
}

export interface PropsSearchWithPaginationSuccess<T>
  extends PropsSearchSuccess<T> {
  pagination: SearchPagination & { total: number };
}

export type SearchActions<T> = {
  search: ActionCreator<
    string,
    (
      props: PropsSearchWithPagination
    ) => PropsSearchWithPagination & TypedAction<string>
  >;
  searchSuccess: ActionCreator<
    string,
    (
      props: PropsSearchWithPaginationSuccess<T>
    ) => PropsSearchWithPaginationSuccess<T> & TypedAction<string>
  >;
  searchFailed: ActionCreator<
    string,
    (props: PropsSearchFailed) => PropsSearchFailed & TypedAction<string>
  >;
};

export type SearchWithPaginationState<Entity> = SearchState<Entity> &
  SearchPagination & {
    total: number;
  };

export type SearchWithPaginationAdapterOptions<AdapterName, AdapterState> =
  SearchAdapterOptions<AdapterName, AdapterState>;
