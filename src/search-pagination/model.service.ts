import {Store} from '@ngrx/store';
import {List} from 'immutable';
import {Observable} from "rxjs";
import {ISearchPaginationSelectors} from "./selectors";
import {Injectable} from "@angular/core";
import {ISearchPaginationActions} from "./actions";

export interface ISearchPaginationModel {
  $ids: Observable<List<string>>;
  $loading: Observable<boolean>;
  $query: Observable<any>;
  $pagination: Observable<any>;
}

@Injectable()
export class SearchPaginationModelService {

  constructor(private store: Store<any>) {
  }

  getModels<T>(selectors: ISearchPaginationSelectors): ISearchPaginationModel {
    const $ids = this.store.select(selectors.getIds);
    const $loading = this.store.select(selectors.getLoading);
    const $query = this.store.select(selectors.getQuery);
    const $pagination = this.store.select(selectors.getPagination);


    return {
      $ids,
      $loading,
      $query,
      $pagination
    };
  }

  dispatch(actions: ISearchPaginationActions): ISearchPaginationActions {

    const clear = (params) => {
      this.store.dispatch(actions.clear(params));
    };

    const search = (params?) => {
      this.store.dispatch(actions.search(params));
    };

    const searchError = (params?) => {
      this.store.dispatch(actions.searchError(params));
    };

    const searchSuccess = (params?) => {
      this.store.dispatch(actions.searchSuccess(params));
    };

    const searchReload = (params?) => {
      this.store.dispatch(actions.searchReload(params));
    };


    return {
      clear,
      search,
      searchSuccess,
      searchError,
      searchReload
    }
  }
}
