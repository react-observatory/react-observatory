import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

/**
 * High-Order Component that enables you to emit an action on componentWillMount.
 *
 * @param action {string} An action to be emitted on componentWillMount.
 * @return {function(*)} HOC factory that enables the component to emit an action on componentWillMount.
 */
export default function withAction(action) {
  return WrappedComponent => {
    class WithAction extends React.Component {
      static WrappedComponent = WrappedComponent;
      static displayName = `withAction(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        'Component'})`;
      static contextTypes = {
        store: PropTypes.object.isRequired
      };

      componentWillMount() {
        if (typeof action === 'string') {
          this.context.store.dispatch({ type: action });
          return;
        }

        this.context.store.dispatch(action);
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return hoistNonReactStatics(WithAction, WrappedComponent);
  };
}
