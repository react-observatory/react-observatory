# `injectReducer({ key, reducer })`

[Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) for injecting Reducers asynchronously.

The Reducer stays in the runtime after component is unmounted.

#### Arguments

1. `{ key, reducer }` (*`Object`*): Aobject with a string `key` to identify the reducer and a [reducer](https://redux.js.org/basics/reducers) function to be injected.

#### Returns

(*`Function`*): A [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) function that accepts a React Component.

#### Example

```js
import { compose } from 'redux'
import { connect } from 'react-redux'
import { injectReducer, injectEpic, withAction } from 'react-observatory'
import reducer from './reducers'
import Blog from './Blog'

function mapStateToProps({ blog }) {
  return {
    blog
  }
}

const withReducer = injectReducer({ key: 'blog', reducer })

export default compose(
  withReducer,
)(Blog)
```
