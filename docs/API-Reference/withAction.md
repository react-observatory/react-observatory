# `withAction(action)`

[Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) for dispatching an action, when asynchronously loaded component is about to mount.

The action will receive the [location](https://reacttraining.com/react-router/web/api/location) and the [match](https://reacttraining.com/react-router/web/api/match) from [react-router.](https://github.com/ReactTraining/react-router)

`withAction(action)` is useful, when you want to run side-effects in the Epics right after Component being loaded.

#### Arguments

1. `action` (*`string`*): Redux [Action](https://redux.js.org/basics/actions) to dispatch.

#### Returns

#### Example
