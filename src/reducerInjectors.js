import invariant from 'invariant';
import isEmpty from 'lodash.isempty';
import isFunction from 'lodash.isfunction';
import isString from 'lodash.isstring';
import { checkStoreWithAsyncReducers } from './checkStore';
import { CREATE_REDUCER_SYMBOL } from './constants';

export function injectReducerFactory(store, isValid) {
  return function injectReducer(key, reducer) {
    if (!isValid) checkStoreWithAsyncReducers(store);

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(app/utils...) injectReducer: Expected `reducer` to be a reducer function'
    );

    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    )
      return;

    store.injectedReducers[key] = reducer;
    store.replaceReducer(store[CREATE_REDUCER_SYMBOL](store.injectedReducers));
  };
}

export default function getInjectors(store) {
  checkStoreWithAsyncReducers(store);

  return {
    injectReducer: injectReducerFactory(store, true)
  };
}
