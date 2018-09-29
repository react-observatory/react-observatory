/**
 * Test injectors
 */

import { checkStoreWithAsyncReducers } from '../checkStoreWithAsyncReducers';
import { REDUCER_CREATOR_SYMBOL } from '../constants';

describe('checkStore', () => {
  describe('checkStoreWithAsyncReducers', () => {
    let store;

    beforeEach(() => {
      store = {
        dispatch: () => {},
        subscribe: () => {},
        getState: () => {},
        replaceReducer: () => {},
        injectedReducers: {},
        [REDUCER_CREATOR_SYMBOL]: () => {}
      };
    });

    it('should not throw if passed valid store shape for injecting reducers', () => {
      expect(() => checkStoreWithAsyncReducers(store)).not.toThrow();
    });

    it('should throw if passed invalid store shape for injecting reducers', () => {
      expect(() => checkStoreWithAsyncReducers({})).toThrow();
      expect(() =>
        checkStoreWithAsyncReducers({
          ...store,
          [REDUCER_CREATOR_SYMBOL]: null
        })
      ).toThrow();
      expect(() =>
        checkStoreWithAsyncReducers({ ...store, injectedReducers: null })
      ).toThrow();
      expect(() =>
        checkStoreWithAsyncReducers({ ...store, replaceReducer: null })
      ).toThrow();
    });
  });
});
