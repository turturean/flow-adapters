import { Observable } from 'rxjs';
import { MemoizedSelector } from '@ngrx/store/src/selector';

export interface SelectState<T = string> {
  selectedItems: T[];
}

export type SelectSelectors<T, S> = {
  selectItems: MemoizedSelector<S, T[]>;
};

export type SelectModelInterface<T> = {
  items$: Observable<T[]>;
  select(selectItems: T[]): void;
  select(selectItems: T): void;
};
