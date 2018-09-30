import invariant from 'invariant';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import { checkStoreWithAsyncReducers } from './checkStoreWithAsyncReducers';
import { REDUCER_CREATOR_SYMBOL } from './constants';

/**
 * Internal helper function for extracting the injector for epics.
 *
 * @param store
 * @param isValid
 * @return {injectReducer}
 */
export function injectReducerFactory(store, isValid) {
  return function injectReducer(key, reducer) {
    if (!isValid) checkStoreWithAsyncReducers(store);

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(react-observatory) injectReducer: Expected `reducer` to be a reducer function'
    );

    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    ) {
      return;
    }

    const reducerCreator = store[REDUCER_CREATOR_SYMBOL];

    store.injectedReducers[key] = reducer;
    store.replaceReducer(reducerCreator(store.injectedReducers));
  };
}

export default function getInjectors(store) {
  checkStoreWithAsyncReducers(store);

  return {
    injectReducer: injectReducerFactory(store, true)
  };
}
