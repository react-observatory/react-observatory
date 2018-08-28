import { combineEpics } from 'redux-observable';

export default combineEpics(
  action$ =>
    action$
      .ofType('Up100')
      .do(console.log)
      .ignoreElements(),
  action$ =>
    action$
      .ofType('RouteActions.Contacts')
      .do(x => console.log(`Route action: ${x.type}`))
      .ignoreElements()
);
