import { Observable } from 'rxjs';
import { MemoizedSelector } from '@ngrx/store/src/selector';

export interface SearchPagination {
  page: number;
  perPage: number;
}

export interface SearchQuery {
  [key: string]: any;
}

export interface SearchSort {
  sortColumn: string;
  sortDir: string;
}

export interface SearchError {
  [key: string]: any;
}

export interface SearchState<T> extends SearchPagination {
  ids: string[];
  entities: { [key: string]: T };
  primaryKey: string;
  isLoading: boolean;
  error: SearchError | null;
  query: SearchQuery;
  sort: SearchSort | null;
  total: number;
}

export interface SearchSelectors<T, S> {
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
