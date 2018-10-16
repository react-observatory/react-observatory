import { createStore, applyMiddleware } from 'redux';
import { applyAsyncReducers } from '@react-observatory/inject-reducer';
import { applyAsyncEpics } from '@react-observatory/inject-epic';
import { createEpicMiddleware } from 'redux-observable';
import composeEnhancers from './utils/composeEnhancers';
import reducerCreator from './reducers';
import { rootEpic, epic$ } from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducerCreator(),
    initialState,
    composeEnhancers(
      applyAsyncReducers(reducerCreator),
      applyAsyncEpics(epic$),
      applyMiddleware(epicMiddleware)
    )
  );

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducerCreator(store.injectedReducers));
    });
  }

  return store;
}
