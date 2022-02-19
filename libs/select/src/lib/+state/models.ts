import { MemoizedSelector } from '@ngrx/store/src/selector';
import { SelectStateAdapter } from './actions';
import { Action, ActionReducer } from '@ngrx/store/src/models';

export type Adapter<
  T,
  S extends SelectState<T> = SelectState<T>
> = SelectStateAdapter<T> &
  SelectSelectors<T, S> & {
    reducer: ActionReducer<S, Action>;
    initialState: S;
  };

export type SelectedOption<S> = {
  stateKey: string;
  type: string;
  selectedItems?: string;
  initialState?: Partial<S>;
};

export type SelectState<T = string, K = string> = {
  [key in K as `${string & key}`]: T[] | undefined;
};

export type SelectSelectors<T, S> = {
  selectItems: MemoizedSelector<S, T[]>;
};
