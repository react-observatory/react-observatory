# `composeReducerCreator(reducers)`

A helper function that takes the Object with Reducers and returns a reducer creator for dynamic reducer injection by [applyAsyncReducers.](/docs/API-Reference/applyAsyncReducers.md)

The reducer creator is only required for setting-up the store.

#### Arguments

1. `reducers` (*`Object`*): An object whose values correspond to different reducing functions that need to be combined into one. See the notes below for some rules every passed reducer must follow.

#### Returns

(*`Function`*): A function that is used to create a set of reducers and will be used by [applyAsyncReducers](/docs/API-Reference/applyAsyncReducers.md) enhancer for dynamic Reducer injection. Serves as a replacement for [combineReducers.](https://redux.js.org/api-reference/combinereducers)

#### Example: Composing a Reducer creator

### `./src/reducers`

```js
import { composeReducerCreator } from 'react-observatory'

const counter = (state = 0, action) => {
  if (action.type === 'Up') {
    return state + 1
  }
  return state
}

export default composeReducerCreator({
  counter
})

```
