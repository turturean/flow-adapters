import { createAction } from '@ngrx/store';
import { selectAdapter, userAdapter } from './app.adapter';

export const logOut = createAction('[APP] Logout');
export const { userSearch, userSearchFailed, userSearchSuccess } = userAdapter;
export const { userSelectItems } = selectAdapter;

type EmptyObject = { [key: string]: any };
type QueryState = {
  query: EmptyObject;
};
type PaginationState = {
  page: number;
  perPage: number;
  total: number;
};

type SearchQuery<isQuery> = isQuery extends true ? QueryState : EmptyObject;
type SearchPagination<isPagination> = isPagination extends true
  ? PaginationState
  : EmptyObject;

type SearchArgs<IS_QUERY, IS_PAGINATION> = {
  isQuery: IS_QUERY;
  isPagination: IS_PAGINATION;
};

type SearchReturn<IS_QUERY, IS_PAGINATION> = SearchQuery<IS_QUERY> &
  SearchPagination<IS_PAGINATION>;

function create<
  IS_QUERY extends boolean = false,
  IS_PAGINATION extends boolean = false
>(
  options: SearchArgs<IS_QUERY, IS_PAGINATION>
): SearchReturn<IS_QUERY, IS_PAGINATION> {
  return {} as SearchReturn<IS_QUERY, IS_PAGINATION>;
}

const {} = create({ isPagination: true, isQuery: false });
