import { createAction, props } from '@ngrx/store';
import {
  PropsSearch,
  PropsSearchFailed,
  PropsSearchSuccess,
  SearchActions,
} from './models';
import { capitalize } from '../tools/tools';

export function createSearchActions<T>(type: string): SearchActions<T> {
  const entityType = capitalize(type);

  return {
    search: createAction(`[${entityType}] search`, props<PropsSearch>()),
    searchSuccess: createAction(
      `[${entityType}] search success`,
      props<PropsSearchSuccess<T>>()
    ),
    searchFailed: createAction(
      `[${entityType}] search failed`,
      props<PropsSearchFailed>()
    ),
  };
}
