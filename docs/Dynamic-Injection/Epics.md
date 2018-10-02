# Epics

This chapter covers the basic setup for Dynamic Epic Injection.

Please note that epics are kept running at runtime even after the Component is unmounted.

## Root Epic Setup

To enable Dynamic Epic injection, we need to create a root epic using `createRootEpic`

It returns us a reference to the stream containing all epics and the actual root epic we can run.

```js
import { createRootEpic } from '@react-observatory/inject-epic'

const logger = action$ =>
  action$
    .ofType('SubmitContactForm')
    .do(console.log)
    .ignoreElements()

const { epic$, rootEpic } = createRootEpic(logger)

export { epic$, rootEpic }
```

## Store Configuration

After that, we need to enhance the store with `applyAsyncEpics`.

We have to pass a stream of all epics `epic$` so it can inject dynamically loaded epics.

The rest of configuration follows the original implementation from [redux-observable.](https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html#reduxconfigurestorejs)

```js
import { compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { applyAsyncEpics } from '@react-observatory/inject-reducer'
import { rootEpic, epic$ } from './epics'

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(
  reducer,
  initialState,
  compose(
    applyAsyncEpics(epic$),
    applyMiddleware(epicMiddleware)
  )
)
```

## Dynamic Epic Injection inside the Components

Now we can start injecting epics dynamically, the epic for `Blog` component will be loaded along with React Component.

```js
import { injectEpic } from '@react-observatory/inject-epic'
import epic from './epics'
import Blog from './Blog'

const withEpic = injectEpic(epic)

export default withEpic(TaskList)
```
