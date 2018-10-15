import React, { createFactory } from 'react';
import { setDisplayName, wrapDisplayName } from 'recompose';
import PropTypes from 'prop-types';

/**
 * High-Order Component that enables you to emit an action on componentWillMount.
 *
 * @param action {string} An action to be emitted on componentWillMount.
 * @return {function(*)} HOC factory that enables the component to emit an action on componentWillMount.
 */
export default function withAction(action) {
  return BaseComponent => {
    const factory = createFactory(BaseComponent);
    class WithAction extends React.Component {
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
        return factory(this.props);
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withAction'))(
        WithAction
      );
    }

    return WithAction;
  };
}
