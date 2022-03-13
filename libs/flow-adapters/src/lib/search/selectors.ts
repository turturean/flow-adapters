import { SearchState } from './models';
import { createSelectors } from '../tools/adapter-selector';

export function createSearchSelectors<T>(stateKey: string, initialState: SearchState<any, true, true>): T {
  return createSelectors<T>(stateKey, initialState) as T;
}
