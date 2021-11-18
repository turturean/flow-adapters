import { Observable } from 'rxjs';

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
