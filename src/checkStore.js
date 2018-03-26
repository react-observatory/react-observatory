import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';
import {
  REDUCER_CREATOR_SYMBOL,
  INJECTED_EPICS_PROPERTY,
  EPICS_STREAM_SYMBOL
} from './constants';

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

const checkEpicStream = stream => {
  invariant(
    isFunction(stream.next) && isFunction(stream.subscribe),
    '(react-observatory) injectEpic: Expected a valid stream'
  );
  return isFunction(stream.next) && isFunction(stream.subscribe);
};

/**
 * Validate the shape of redux store for dynamic epic injection.
 */
export function checkStoreWithAsyncEpics(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    [INJECTED_EPICS_PROPERTY]: Array.isArray
  };

  invariant(
    conformsTo(store, shape) && checkEpicStream(store[EPICS_STREAM_SYMBOL]),
    '(react-observatory) injectEpic: Expected a valid redux store'
  );
}
