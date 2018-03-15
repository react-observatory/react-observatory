import { EPICS_STREAM_SYMBOL, INJECTED_EPICS_PROPERTY } from './constants';
import { checkStoreWithAsyncEpics } from './checkStore';

/**
 * Internal helper function for extracting the injector for epics.
 *
 * @param store
 * @return {{injectEpic: function(*=)}}
 */
export default function getInjectors(store) {
  checkStoreWithAsyncEpics(store);
  return {
    injectEpic: loadedEpic => {
      if (store[INJECTED_EPICS_PROPERTY].indexOf(loadedEpic) !== -1) {
        return;
      }

      store[INJECTED_EPICS_PROPERTY] = [
        ...store[INJECTED_EPICS_PROPERTY],
        loadedEpic
      ];
      store[EPICS_STREAM_SYMBOL].next(loadedEpic);
    }
  };
}
