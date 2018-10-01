import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

/**
 * High-Order Component that enables you to emit an action on componentWillMount.
 *
 * @param actionCreator {Function} An action to be emitted on componentWillMount.
 * @return {function(*)} HOC factory that enables the component to emit an action on componentWillMount.
 */
export default function withActionFormProps(actionCreator, propTypes) {
  return WrappedComponent => {
    class WithActionFromProps extends React.Component {
      static WrappedComponent = WrappedComponent;
      static propTypes = propTypes;
      static displayName = `withActionFromProps(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        'Component'})`;
      static contextTypes = {
        store: PropTypes.object.isRequired
      };

      componentWillMount() {
        this.context.store.dispatch(actionCreator(this.props));
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return hoistNonReactStatics(WithActionFromProps, WrappedComponent);
  };
}
