export default (state = 0, action) => {
  if (action.type === 'Up100') {
    return state + 100;
  }

  return state;
};
