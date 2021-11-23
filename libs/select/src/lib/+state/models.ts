import { Observable } from 'rxjs';
import { MemoizedSelector } from '@ngrx/store/src/selector';

export type SelectState<T = string> = {
  selectedItems: T[];
};

export interface SelectSelectors<T, S> {
  selectItems: MemoizedSelector<S, T[]>;
}

export interface SelectModelInterface<T> {
  items$: Observable<T[]>;

  select(selectItems: T[]): void;
  select(selectItems: T): void;
}
