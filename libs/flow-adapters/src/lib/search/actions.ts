import { createAction, props } from '@ngrx/store';
import { capitalize } from '../tools/tools';
import {
  PropsSearch,
  PropsSearchFailed,
  PropsSearchSuccess,
  SearchActions,
} from './models';

export function createSearchActions<
  Entity = unknown,
  HasPagination extends boolean = false,
  HasQuery extends boolean = false,
  AdapterName = string
>(type: AdapterName) {
  const entityType = capitalize(String(type));

  return {
    search: createAction(
      `[${entityType}] search`,
      // @ts-ignore
      props<PropsSearch<HasPagination, HasQuery>>()
    ),
    searchSuccess: createAction(
      `[${entityType}] search success`,
      // @ts-ignore
      props<PropsSearchSuccess<Entity, HasPagination>>()
    ),
    searchFailed: createAction(
      `[${entityType}] search failed`,
      props<PropsSearchFailed>()
    ),
  } as SearchActions<Entity, HasPagination, HasQuery>;
}
