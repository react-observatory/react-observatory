import { createRootEpic } from '@react-observatory/inject-epic';

const logger = action$ =>
  action$
    .ofType('Up')
    .do(console.log)
    .ignoreElements();

const { epic$, rootEpic } = createRootEpic(logger);

export { epic$, rootEpic };
