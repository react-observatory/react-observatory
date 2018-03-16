# `applyAsyncReducers(reducerCreator)`

A function that takes a reducer creator, created with [composeReducerCreator](/docs/API-Reference/composeReducerCreator.md) returns a [store enhancer.](https://redux.js.org/glossary#store-enhancer) for dynamic Reducer injection.

#### Arguments

1. reducerCreator (`Function`): A function that accepts an object with reducers and 

#### Returns

(*`Function`*): A store enhancer that is used as an argument for [createStore.](https://redux.js.org/api-reference/createstore) to enable dynamic Reducer injection.

#### Example: Configuring the Store for dynamic Reducer injection

```js
import { createStore } from 'redux'
import { applyAsyncReducers } from 'react-observatory'
import reducerCreator from './reducers'

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducerCreator(),
    initialState,
    applyAsyncReducers(reducerCreator)
  )

  return store
}
```
