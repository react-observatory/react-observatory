/**
 * Test injectors
 */

import { shallow } from 'enzyme';
import React from 'react';
import identity from 'lodash/identity';

import { createStore } from 'redux';
import injectReducer from '../injectReducer';
import * as reducerInjectors from '../reducerInjectors';

// Fixtures
const Component = () => null;

const reducer = identity;

// Dummy reducer to supress redux warnings.
const dummyReducer = () => ({});

const mockStore = () => createStore(() => ({
  dummyReducer
}));

describe('injectReducer decorator', () => {
  let store;
  let injectors;
  let ComponentWithReducer;

  beforeAll(() => {
    reducerInjectors.default = jest.fn().mockImplementation(() => injectors);
  });

  beforeEach(() => {
    store = mockStore();
    injectors = {
      injectReducer: jest.fn()
    };
    ComponentWithReducer = injectReducer('test', reducer)(Component);
    reducerInjectors.default.mockClear();
  });

  it('should inject a given reducer', () => {
    shallow(<ComponentWithReducer />, { context: { store } });

    expect(injectors.injectReducer).toHaveBeenCalledTimes(1);
    expect(injectors.injectReducer).toHaveBeenCalledWith('test', reducer);
  });

  it('should set a correct display name', () => {
    expect(ComponentWithReducer.displayName).toBe('withReducer(Component)');
    expect(injectReducer('test', reducer)(() => null).displayName).toBe(
      'withReducer(Component)'
    );
  });

  it('should propagate props', () => {
    const props = { testProp: 'test' };
    const renderedComponent = shallow(<ComponentWithReducer {...props} />, {
      context: { store }
    });

    expect(renderedComponent.prop('testProp')).toBe('test');
  });
});
