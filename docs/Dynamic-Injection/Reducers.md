# Reducers

First we need to create a function that will allow us to inject new reducers dynamically.

In this example the `counter` reducer will be available on every page.

```js
import { composeReducerCreator } from 'react-observatory'

const counter = (state = 0, action) => {
  return state + 1;
}

export default composeReducerCreator({
  counter
})
```

After that we need to enhance the store with applyAsyncReducers.

It needs the `reducerCreator` to replace the old reducer with an updated one, when we inject new reducers dynamically.

```js
import { createStore } from 'redux'
import { applyAsyncReducers } from 'react-observatory'
import reducerCreator from './reducers'

const store = createStore(
  reducerCreator(),
  initialState,
  applyAsyncReducers(reducerCreator)
);
```

Now we can start injecting reducers dynamically, the reducer for `TaskList` component will be loaded along with React Component.

```js
import { injectReducer } from 'react-observatory'
import taskListReducer from './reducers'
import TaskList from './TaskList'

const withReducer = injectReducer({ key: 'taskList', taskListReducer })

export default withReducer(TaskList)
```
