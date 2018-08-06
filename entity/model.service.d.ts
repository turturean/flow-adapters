import { Store } from '@ngrx/store';
import { List, Map } from 'immutable';
import { Observable } from "rxjs";
import { IEntitySelectors } from "./selectors";
import { IEntityActions } from "./actions";
export interface IEntityModel<T> {
    $entities: Observable<Map<string, List<T>>>;
}
export declare class EntityModelService {
    private store;
    constructor(store: Store<any>);
    getModels<T>(selectors: IEntitySelectors<T>): IEntityModel<T>;
    dispatch(actions: IEntityActions): IEntityActions;
}
