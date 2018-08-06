import {Store} from '@ngrx/store';
import {List, Map} from 'immutable';
import {Observable} from "rxjs";
import {IEntitySelectors} from "./selectors";
import {Injectable} from "@angular/core";
import {IEntityActions} from "./actions";

export interface IEntityModel<T> {
  $entities:  Observable<Map<string, List<T>>>;
}

@Injectable()
export class EntityModelService {

  constructor(private store: Store<any>) {
  }

  getModels<T>(selectors: IEntitySelectors<T>): IEntityModel<T> {
    const $entities = this.store.select(selectors.getEntities);

    return {
      $entities,
    };
  }

  dispatch(actions: IEntityActions): IEntityActions {

    const add = (params) => {
      this.store.dispatch(actions.add(params));
    };

    const addSuccess = (params?) => {
      this.store.dispatch(actions.addSuccess(params));
    };

    const addError = (params?) => {
      this.store.dispatch(actions.addError(params));
    };

    const find = (params?) => {
      this.store.dispatch(actions.find(params));
    };

    const findSuccess = (params?) => {
      this.store.dispatch(actions.findSuccess(params));
    };

    const findError = (params?) => {
      this.store.dispatch(actions.findError(params));
    };

    const remove = (params?) => {
      this.store.dispatch(actions.remove(params));
    };

    const removeError = (params?) => {
      this.store.dispatch(actions.removeError(params));
    };

    const removeSuccess = (params?) => {
      this.store.dispatch(actions.removeSuccess(params));
    };

    const update = (params?) => {
      this.store.dispatch(actions.update(params));
    };

    const updateError = (params?) => {
      this.store.dispatch(actions.updateError(params));
    };

    const updateSuccess = (params?) => {
      this.store.dispatch(actions.updateSuccess(params));
    };



    return {
      add,
      addSuccess,
      addError,
      findError,
      find,
      findSuccess,
      remove,
      removeSuccess,
      removeError,
      updateSuccess,
      updateError,
      update
    }
  }
}
