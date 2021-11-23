import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectState, SelectModelInterface, SelectSelectors } from './models';
import { SelectStateAdapter } from './actions';
import { Adapter } from './adapter';

export class SelectModel<T> implements SelectModelInterface<T> {
  protected selectors: SelectSelectors<T, SelectState<T>>;
  protected actions: SelectStateAdapter<T>;

  items$: Observable<T[]>;

  constructor(
    public store: Store<SelectState<T>>,
    protected adapter: Adapter<T, SelectState<T>>
  ) {
    this.selectors = this.adapter.getSelectors();
    this.actions = this.adapter.getActions();

    this.items$ = this.store.select(this.selectors.selectItems);
  }

  select(selectItems: T[] | T): void {
    this.store.dispatch(
      this.actions.select({
        selectedItem: Array.isArray(selectItems) ? selectItems : [selectItems],
      })
    );
  }
}

export function createSelectModelFactory<T>(
  adapter: Adapter<T, SelectState<T>>
) {
  return function (store: Store<SelectState<T>>): SelectModel<T> {
    return new SelectModel(store, adapter);
  };
}
