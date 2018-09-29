import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { mergeMap } from 'rxjs/operator/mergeMap';

/**
 * A helper function for creating the root epic for dynamic epic injection.
 *
 * @param epics
 * @return {{epic$: BehaviorSubject<any>, rootEpic: function(*=, *=): Observable<any>}}
 */
export default function createRootEpic(epics) {
  const epic$ = new BehaviorSubject(epics);
  const rootEpic = (action$, store) =>
    mergeMap.call(epic$, epic => epic(action$, store));

  return { epic$, rootEpic };
}
