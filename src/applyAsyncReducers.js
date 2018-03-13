import { CREATE_REDUCER_SYMBOL } from "./constants";

/**
 * A store enhancer that enables dynamic injection of reducers.
 *
 * @param {function} createReducer function for creating root reducer.
 * @returns {function} A store enhancer applying the middleware.
 */
export default function applyAsyncReducers(createReducer) {
  return createStore => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState);
    return {
      ...store,
      injectedReducers: {},
      // Hide the implementation details under a Symbol.
      [CREATE_REDUCER_SYMBOL]: createReducer
    };
  };
}
