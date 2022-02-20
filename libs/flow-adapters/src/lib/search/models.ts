import { ActionCreator, TypedAction } from '@ngrx/store/src/models';
import { AdapterConfig } from '../types';

export type SearchEntity = {
  [key: string]: any;
};

export type SearchQuery = {
  [key: string]: unknown;
};

export type SearchSort = {
  sortColumn: string;
  sortDir: string;
};

export type SearchError = {
  [key: string]: unknown;
};

export interface PropsSearch {
  sort?: SearchSort;
  query?: SearchQuery;
}

export interface PropsSearchSuccess<T> {
  entities: T[];
}

export interface PropsSearchFailed {
  error: SearchError | null;
}

export type SearchActions<T> = {
  search: ActionCreator<
    string,
    (props: PropsSearch) => PropsSearch & TypedAction<string>
  >;
  searchSuccess: ActionCreator<
    string,
    (
      props: PropsSearchSuccess<T>
    ) => PropsSearchSuccess<T> & TypedAction<string>
  >;
  searchFailed: ActionCreator<
    string,
    (props: PropsSearchFailed) => PropsSearchFailed & TypedAction<string>
  >;
};

export type SearchState<Entity> = {
  ids: string[];
  entities: { [key: string]: Entity };
  primaryKey: string;
  isLoading: boolean;
  error: SearchError | null;
  query: SearchQuery;
  sort: SearchSort | null;
};

export type SearchAdapterOptions<AdapterName, AdapterState> = AdapterConfig<
  AdapterName,
  AdapterState
> & {
  primaryKey?: string;
};
