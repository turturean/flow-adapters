import {List, Map} from "immutable";

export interface IPaginationState {
  limit: number;
  page: number;
  totals: number;
}

export interface ISearchPaginationState extends IPaginationState {
  ids: List<string>
  loading: boolean;
  query: Map<string, any>;
}

export function getInitialSearchPaginationState(additionalState?) {
  const initial = {
    ids: List(),
    limit: 10,
    loading: false,
    page: 1,
    query: Map(),
    totals: 0
  };

  return {...initial, ...additionalState};
}

export function createInitialStateFactory() {

  return {
    getInitialState: (additionalState?: ISearchPaginationState): ISearchPaginationState => {
      return getInitialSearchPaginationState(additionalState);
    }
  };
}
