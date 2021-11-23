import { createAction, props } from '@ngrx/store';
import { ActionCreator, TypedAction } from '@ngrx/store/src/models';

export interface PropsSelect<T> {
  selectedItem: T | T[];
}

export interface SelectStateAdapter<T> {
  select: ActionCreator<
    string,
    (props: PropsSelect<T>) => PropsSelect<T> & TypedAction<string>
  >;
}

export function createSelectActions<T>(type: string): SelectStateAdapter<T> {
  return {
    select: createAction(`[${type}] select`, props<PropsSelect<T>>()),
  };
}
