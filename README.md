# React Observatory

A library to provide you with tooling and knowledge about building your React Redux Architecture around code-splitting.

[![Build Status](https://travis-ci.org/halfzebra/react-observatory.svg?branch=master)](https://travis-ci.org/halfzebra/react-observatory) [![npm version](https://badge.fury.io/js/react-observatory.svg)](https://badge.fury.io/js/react-observatory)

## Prerequisites

React Observatory can be used to it's full potential in projects that employ [react-router@4.x](https://github.com/ReactTraining/react-router), [redux,](https://github.com/reactjs/redux) [redux-observable](https://github.com/redux-observable/redux-observable/) and [react-loadable](https://github.com/jamiebuilds/react-loadable) or any other way for code-splitting.

## Installation

To install the stable version:

```
npm install --save react-observatory
```

## The Gist

Here's an example of [Container Component](https://redux.js.org/basics/usage-with-react#presentational-and-container-components) that loads a reducer, epic and dispatches an action, when user navigates to the page with that component.

```js
import { compose } from 'redux'
import { connect } from 'react-redux'
import { injectReducer, injectEpic, withAction } from 'react-observatory'
import reducer from './reducers'
import Blog from './Blog'
import epic from './epics'

function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

const mapDispatchToProps = { up: () => ({ type: 'Up100' }) }

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({ key: 'blog', reducer })

const withEpic = injectEpic(epic)

export default compose(
  withReducer,
  withEpic,
  withAction('RouterActions.Blog'),
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
