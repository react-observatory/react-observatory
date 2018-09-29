import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getInjectors from './epicInjectors';
import hoistNonReactStatics from 'hoist-non-react-statics';

/**
 * High-Order Component that dynamically injects a reducer.
 *
 * @param epic {@class Observable<T>} An epic that will be injected
 * @return {function(*)}  HOC factory that injects the epic.
 */
export default epic => WrappedComponent => {
  class InjectEpic extends Component {
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      store: PropTypes.object.isRequired
    };
    static displayName = `withEpic(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    injectors = getInjectors(this.context.store);

    componentWillMount() {
      const { injectEpic } = this.injectors;

      injectEpic(epic);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(InjectEpic, WrappedComponent);
};
