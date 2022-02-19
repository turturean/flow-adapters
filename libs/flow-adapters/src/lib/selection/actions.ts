import { createAction, props } from '@ngrx/store';
import { PropsSelect, SelectActions } from './models';

export function createSelectActions(type: string): SelectActions {
  return {
    selectItems: createAction(`[${type}] select`, props<PropsSelect>()),
  };
}
