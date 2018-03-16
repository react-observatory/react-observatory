# `applyAsyncEpics(epic$)`

A function that takes a stream of [Epics](https://redux-observable.js.org/docs/basics/Epics.html) and returns a [store enhancer.](https://redux.js.org/glossary#store-enhancer) for dynamic Epic injection.

#### Arguments

1. `epic$` ([*`BehaviorSubject`*](http://reactivex.io/rxjs/manual/overview.html#behaviorsubject)<[*`Epic`*](https://redux-observable.js.org/docs/basics/Epics.html)>): a stream of all epics in the runtime.

#### Returns

(*`Function`*): (*`Function`*): A store enhancer that is used as an argument for [createStore.](https://redux.js.org/api-reference/createstore) to enable dynamic Epic injection.

#### Example
