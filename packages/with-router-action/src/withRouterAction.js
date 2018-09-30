import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

/**
 * High-Order Component that enables you to emit an action on componentWillMount.
 *
 * @param action {string} An action to be emitted on componentWillMount.
 * @return {function(*)} HOC factory that enables the component to emit an action on componentWillMount.
 */
export default function withRouterAction(action) {
  return WrappedComponent => {
    class WithRouterAction extends React.Component {
      static WrappedComponent = WrappedComponent;
      static contextTypes = {
        store: PropTypes.object.isRequired
      };
      static propTypes = {
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
      };
      static displayName = `withRouterAction(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        'Component'})`;

      componentWillMount() {
        const { location, match } = this.props;

        this.context.store.dispatch({
          type: action,
          payload: {
            location,
            match
          }
        });
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return hoistNonReactStatics(WithRouterAction, WrappedComponent);
  };
}
