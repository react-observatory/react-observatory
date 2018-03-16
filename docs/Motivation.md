# Motivation

React Observable was created as an opinionated effort to provide developers with tooling and guidance on building advanced React architecture with code-splitting.

[react-router](https://github.com/ReactTraining/react-router) along with [react-loadable](https://github.com/jamiebuilds/react-loadable) enables us to do component-centric code-splitting.

This does not address the code-splitting of [reducers](https://redux.js.org/basics/reducers) and [epics.](https://redux-observable.js.org/docs/basics/Epics.html)

Code-splitting with reducers and [sagas](https://redux-saga.js.org/) is implemented in [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate), but it does not expose the utilities as a reusable library.

React Observatory is intender to be used in the conjunction with libraries such as:

- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [React Loadable](https://github.com/jamiebuilds/react-loadable)
- [Redux](https://redux.js.org/)
- [Redux Observable](https://redux-observable.js.org/)
- [RxJS](http://reactivex.io/rxjs/)

Due to the composable nature of [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) it's possible to apply React Observatory in other scenarios which will not be covered in this documentation.
