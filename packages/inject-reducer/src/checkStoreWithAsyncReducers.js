import conformsTo from 'lodash/conformsTo';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import invariant from 'invariant';
import { REDUCER_CREATOR_SYMBOL } from './constants';

/**
 * Validate the shape of redux store for dynamic reducer injection.
 */
export function checkStoreWithAsyncReducers(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    injectedReducers: isObject
  };
  invariant(
    conformsTo(store, shape) && isFunction(store[REDUCER_CREATOR_SYMBOL]),
    '(react-observatory) injectReducer: Expected a valid redux store'
  );
}
