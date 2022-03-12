import { createAction, props } from '@ngrx/store';
import { capitalize } from '../tools/tools';
import {
  PropsSearch,
  PropsSearchFailed,
  PropsSearchSuccess,
  SearchActions,
} from './models';

export function createSearchActions<Entity = unknown, AdapterName = string>(
  type: AdapterName
): SearchActions<Entity> {
  const entityType = capitalize(String(type));

  return {
    search: createAction(`[${entityType}] search`, props<PropsSearch>()),
    searchSuccess: createAction(
      `[${entityType}] search success`,
      props<PropsSearchSuccess<Entity>>()
    ),
    searchFailed: createAction(
      `[${entityType}] search failed`,
      props<PropsSearchFailed>()
    ),
  };
}
