import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectState, SelectModelInterface, Adapter } from './models';

export class SelectModel<T> implements SelectModelInterface<T> {
  items$: Observable<T[]>;

  constructor(
    public store: Store<SelectState<T>>,
    protected adapter: Adapter<T>
  ) {
    this.items$ = this.store.select(this.adapter.selectItems);
  }

  select(selectItems: T[] | T): void {
    this.store.dispatch(
      this.adapter.select({
        selectedItem: Array.isArray(selectItems) ? selectItems : [selectItems],
      })
    );
  }
}

export function createSelectModelFactory<T>(adapter: Adapter<T>) {
  return function (store: Store<SelectState<T>>): SelectModel<T> {
    return new SelectModel(store, adapter);
  };
}
