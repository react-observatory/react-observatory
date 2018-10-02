# 🔭 React Observatory

A library to provide you with tooling and knowledge about building your React Redux Architecture around code-splitting.

[![Build Status](https://travis-ci.org/react-observatory/react-observatory.svg?branch=master)](https://travis-ci.org/react-observatory/react-observatory)

## Prerequisites

React Observatory can be used to it's full potential in projects that employ [react-router@4.x](https://github.com/ReactTraining/react-router), [redux,](https://github.com/reactjs/redux) [redux-observable](https://github.com/redux-observable/redux-observable/) and [react-loadable](https://github.com/jamiebuilds/react-loadable) or any other way for code-splitting.

## Installation

To install the stable versions:

```
npm install --save @react-observatory/inject-epic
npm install --save @react-observatory/inject-reducer
npm install --save @react-observatory/with-action
npm install --save @react-observatory/with-router-action
```

## The Gist

Here's an example of [Container Component](https://redux.js.org/basics/usage-with-react#presentational-and-container-components) that loads a reducer, epic and dispatches an action, when user navigates to the page with that component.

```js
import { compose } from 'redux'
import { connect } from 'react-redux'
import { injectReducer } from '@react-observatory/inject-reducer'
import { injectEpic } from '@react-observatory/inject-epic'
import { withRouterAction } from '@react-observatory/with-router-action'
import reducer from './reducers'
import Blog from './Blog'
import epic from './epics'

const mapStateToProps = ({ blog }) => ({ blog })
const mapDispatchToProps = { up: () => ({ type: 'Up100' }) }
const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer('blog', reducer)
const withEpic = injectEpic(epic)

export default compose(
  withReducer,
  withEpic,
  withRouterAction('RouterActions.Blog'),
  withConnect
)(Blog)
```

## Thanks

* [redux](https://redux.js.org/) for enabling better architectures.
* [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) for a good idea on how to inject reducers and sagas dynamically;
* [react-observable](https://redux-observable.js.org/) for enabling declarative side-effects in Redux architecture;
* [react-loadable](https://github.com/jamiebuilds/react-loadable) for beautiful code-splitting on component level.

## License

MIT
