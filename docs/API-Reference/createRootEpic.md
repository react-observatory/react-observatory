# `createRootEpic(epic)`

A helper for creating a root epic and a stream of epics that enables [adding new Epics asynchronously.](https://redux-observable.js.org/docs/recipes/AddingNewEpicsAsynchronously.html)

#### Arguments

1. `epic` (*[`Epic`](https://redux-observable.js.org/docs/basics/Epics.html)*): takes your root epic and decorates it to support Dynamic Epic Injection.

#### Returns

(`Object`): An object with a reference to `epic$` stream of all epics, witch is used by [applyAsyncEpics](/docs/API-Reference/applyAsyncEpics.md) and `rootEpic`, which is required for [creating a redux-observable middleware.](https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html)

#### Example: Creating a Root Epic

### `./src/epics`

```js
import { createRootEpic } from 'react-observatory'

const logger = action$ =>
  action$
    .ofType('Up')
    .do(console.log)
    .ignoreElements()

const { epic$, rootEpic } = createRootEpic(logger)

export { epic$, rootEpic }
```


