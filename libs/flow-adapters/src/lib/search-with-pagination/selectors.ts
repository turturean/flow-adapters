import { SelectorTypes } from './../types';
import { SearchWithPaginationState } from './models';
import { createSearchSelectors } from 'flow-adapters';

export function createSearchWithPaginationSelectors<
  State extends SearchWithPaginationState<any>,
  AdapterName = string
>(
  stateKey: string,
  initialState: State,
  type: AdapterName
): SelectorTypes<State, AdapterName> {
  return createSearchSelectors(stateKey, initialState, type);
}
