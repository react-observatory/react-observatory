/**
 * Test injectors
 */

import {
  checkStoreWithAsyncReducers,
  checkStoreWithAsyncEpics
} from '../checkStore';
import { REDUCER_CREATOR_SYMBOL, EPICS_STREAM_SYMBOL } from '../constants';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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

  describe('checkStoreWithAsyncEpics', () => {
    let store;

    beforeEach(() => {
      store = {
        dispatch: () => {},
        subscribe: () => {},
        getState: () => {},
        replaceReducer: () => {},
        injectedEpics: [],
        [EPICS_STREAM_SYMBOL]: new BehaviorSubject('Hello!')
      };
    });

    it('should not throw if passed valid store shape for injecting epics', () => {
      expect(() => checkStoreWithAsyncEpics(store)).not.toThrow();
    });

    it('should throw if passed invalid store shape for injecting epics', () => {
      expect(() => checkStoreWithAsyncEpics({})).toThrow();
      expect(() =>
        checkStoreWithAsyncEpics({ ...store, [EPICS_STREAM_SYMBOL]: null })
      ).toThrow();
      expect(() =>
        checkStoreWithAsyncEpics({ ...store, injectedEpics: null })
      ).toThrow();
      expect(() =>
        checkStoreWithAsyncEpics({ ...store, replaceReducer: null })
      ).toThrow();
    });
  });
});
