import { composeReducerCreator } from '@react-observatory/inject-reducer';

const globalReducer = (state = 0, action) => {
  if (action.type === 'Up') {
    return state + 1;
  }
  return state;
};

export default composeReducerCreator({
  globalReducer
});
