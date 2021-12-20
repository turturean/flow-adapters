import { Observable } from 'rxjs';
import { MemoizedSelector } from '@ngrx/store/src/selector';

export type SearchEntity = {
  [key: string]: any;
};

export type SearchPagination = {
  page: number;
  perPage: number;
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

export type SearchState<T extends SearchEntity> = SearchPagination & {
  ids: string[];
  entities: { [key: string]: T };
  primaryKey: string;
  isLoading: boolean;
  error: SearchError | null;
  query: SearchQuery;
  sort: SearchSort | null;
  total: number;
};

export interface SearchSelectors<
  T extends SearchEntity = SearchEntity,
  S extends SearchState<T> = SearchState<T>
> {
  selectIds: MemoizedSelector<S, string[]>;
  selectEntities: MemoizedSelector<S, T[]>;
  selectError: MemoizedSelector<S, SearchError | null>;
  selectQuery: MemoizedSelector<S, SearchQuery>;
  selectSort: MemoizedSelector<S, SearchSort | null>;
  selectIsLoading: MemoizedSelector<S, boolean>;
  selectPagination: MemoizedSelector<
    S,
    { perPage: number; page: number; total: number }
  >;
}

export interface SearchModelInterface<T> {
  query$: Observable<SearchQuery>;
  sort$: Observable<SearchSort | null>;
  pagination$: Observable<SearchPagination>;
  entities$: Observable<T[]>;
  error$: Observable<SearchError | null>;
  ids$: Observable<string[]>;

  search(query: SearchQuery, pagination: SearchPagination): void;
  searchQuery(query: SearchQuery): void;
  searchWithPagination(pagination: SearchPagination): void;
}
