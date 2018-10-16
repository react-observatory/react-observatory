# `withRouterAction(action)`

[Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) for dispatching an action, when component is about to mount.

The action will receive the [location](https://reacttraining.com/react-router/web/api/location) and the [match](https://reacttraining.com/react-router/web/api/match) from [react-router.](https://github.com/ReactTraining/react-router)

`withAction(action)` is useful, when you want to start running side-effects in the Epics right after Component being rendered.

#### Arguments

1. `action` (*`string`*): Redux [Action](https://redux.js.org/basics/actions) to dispatch.

#### Returns

(*`Function`*): A [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html), which dispatches an [Action,](https://redux.js.org/basics/actions) when Component is mounted.

#### Example: Dispatching an [Action,](https://redux.js.org/basics/actions) before the About component is rendered.

### `./src/containers/About`

```js
import { withRouterAction } from '@react-observatory/with-action'
import About from './About'

export default withAction('About')(About)
```
