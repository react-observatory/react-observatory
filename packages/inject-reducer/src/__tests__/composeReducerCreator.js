import composeReducerCreator from '../composeReducerCreator';

describe('composeReducerCreator', () => {
  it('should not throw if reducer is not supplied as an argument', () => {
    expect(() => composeReducerCreator()).not.toThrow();
  });

  it('should return a function', () => {
    expect(typeof composeReducerCreator()).toBe('function');
  });

  it('should compose reducers', () => {
    const reducer = jest.fn();

    reducer.mockReturnValue('test');

    const reducerCreator = composeReducerCreator({ reducer });

    expect(reducerCreator()()).toEqual({ reducer: 'test' });
  });

  it('should return a reducerCreator', () => {
    const reducerOne = jest.fn();
    const reducerTwo = jest.fn();

    reducerOne.mockReturnValue('test');
    reducerTwo.mockReturnValue('hello');

    const reducerCreator = composeReducerCreator({ reducerOne });

    expect(reducerCreator({ reducerTwo })()).toEqual({
      reducerOne: 'test',
      reducerTwo: 'hello'
    });
  });
});
