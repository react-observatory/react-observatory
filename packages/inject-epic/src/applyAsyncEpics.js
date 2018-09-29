import { EPICS_STREAM_SYMBOL, INJECTED_EPICS_PROPERTY } from './constants';

/**
 * Creates a store enhancer that enables dynamic injection of epics.
 *
 * ```js
 * import { createStore, compose, applyMiddleware } from 'redux'
 * import { applyAsyncEpics } from 'react-observatory'
 * import { createEpicMiddleware } from 'redux-observable'
 * import reducers from './reducers'
 * import { rootEpic, epic$ } from './epics'
 *
 * const epicMiddleware = createEpicMiddleware(rootEpic)
 *
 * export default function configureStore(initialState = {}) {
 *  const store = createStore(
 *    reducers,
 *      initialState,
 *      compose(
 *       applyAsyncEpics(epic$),
 *       applyMiddleware(epicMiddleware)
 *     )
 *   )
 *
 *   return store
 * }
 *  ```
 *
 * @param epics$ {@class BehaviorSubject<T>} A stream of epics.
 * @returns {function} A store enhancer applying the middleware.
 */
export default function applyAsyncEpics(epics$) {
  return createStore => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState);
    return {
      ...store,
      [INJECTED_EPICS_PROPERTY]: [],
      // Hide the implementation details under a Symbol.
      [EPICS_STREAM_SYMBOL]: epics$
    };
  };
}
