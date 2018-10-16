# `withRouterAction(action)`

[Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) for dispatching an action with the data from the router context, when the route is matched and corresponding component is about to mount.

The action will receive the [location](https://reacttraining.com/react-router/web/api/location) and the [match](https://reacttraining.com/react-router/web/api/match) from [react-router.](https://github.com/ReactTraining/react-router)

`withRouterAction(action)` is useful, when you want to run side-effects in the Epics right after Component being loaded.

#### Arguments

1. `action` (*`string`*): Redux [Action](https://redux.js.org/basics/actions) to dispatch.

#### Returns

(*`Function`*): A [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) function that enables us to dispatch an [Action,](https://redux.js.org/basics/actions) when Component is mounted.

#### Example: Dispatching an [Action,](https://redux.js.org/basics/actions) when the Container is mounted.

### `./src/containers/About`

```js
import { withRouterAction } from '@react-observatory/with-router-action'
import About from './About'

// It's nice to prefix the Actions, so it's easy to recognize them in the DevTool.
export default withRouterAction('RouterAction.About')(About)
```
