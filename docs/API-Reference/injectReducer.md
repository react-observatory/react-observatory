# `injectReducer(key, reducer)`

[Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) for injecting Reducers asynchronously.

The Reducer with a duplicate `key` will be ignored.

The Reducer stays in the runtime after component is unmounted.

#### Arguments

1. `key` (*`String`*): A string `key` to identify the reducer in the [State.](https://redux.js.org/glossary#state)

2. `reducer` (*`Function`*): A [reducer](https://redux.js.org/basics/reducers) function to be injected.

#### Returns

(*`Function`*): A [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) function that accepts a React Component.

#### Example

```js
import { compose } from 'redux'
import { connect } from 'react-redux'
import { injectEpic } from '@react-observatory/inject-epic'
import { injectReducer } from '@react-observatory/inject-reducer'
import { withRouterAction } from '@react-observatory/with-router-action'
import reducer from './reducers'
import Blog from './Blog'

function mapStateToProps({ blog }) {
  return {
    blog
  }
}

const withReducer = injectReducer('blog', reducer)

export default compose(
  withReducer,
)(Blog)
```
