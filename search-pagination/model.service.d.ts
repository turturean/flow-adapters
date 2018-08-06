import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable } from "rxjs";
import { ISearchPaginationSelectors } from "./selectors";
import { ISearchPaginationActions } from "./actions";
export interface ISearchPaginationModel {
    $ids: Observable<List<string>>;
    $loading: Observable<boolean>;
    $query: Observable<any>;
    $pagination: Observable<any>;
}
export declare class SearchPaginationModelService {
    private store;
    constructor(store: Store<any>);
    getModels<T>(selectors: ISearchPaginationSelectors): ISearchPaginationModel;
    dispatch(actions: ISearchPaginationActions): ISearchPaginationActions;
}
