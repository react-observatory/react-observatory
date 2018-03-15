# `injectEpic(epic)`

`injectEpic()` is used to create a [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) that will inject the epic into the runtime.

#### Arguments

1. (`epic`) *[Epic](https://redux-observable.js.org/docs/basics/Epics.html)*: an epic to inject.

#### Returns

(*`Function`*): [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) function

#### Example

### containers/Blog/index.js

```js
import { injectEpic } from 'react-observatory'
import epic from './epics'
import Blog from './Blog'

const withEpic = injectEpic(epic)

export default withEpic(TaskList)
```