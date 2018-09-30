/**
 * Test injectors
 */

import { checkStoreWithAsyncEpics } from '../checkStoreWithAsyncEpics';
import { EPICS_STREAM_SYMBOL } from '../constants';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
