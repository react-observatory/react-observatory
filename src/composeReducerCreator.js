import { combineReducers } from 'redux';

/**
 * A helper for creating the root reducer factory.
 *
 * @param reducers
 * @return {function(*): Reducer<any>}
 */
export default function composeReducerCreator(reducers) {
  return asyncReducers =>
    combineReducers({
      ...reducers,
      ...asyncReducers
    });
}
