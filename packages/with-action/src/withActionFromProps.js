import React, { createFactory } from 'react';
import PropTypes from 'prop-types';
import { setDisplayName, wrapDisplayName, setStatic, compose } from 'recompose';

/**
 * High-Order Component that enables you to emit an action on componentWillMount.
 *
 * @param actionCreator {Function} An action to be emitted on componentWillMount.
 * @return {function(*)} HOC factory that enables the component to emit an action on componentWillMount.
 */
export default function withActionFormProps(actionCreator, propTypes) {
  return BaseComponent => {
    const factory = createFactory(BaseComponent);
    class WithActionFromProps extends React.Component {
      static contextTypes = {
        store: PropTypes.object.isRequired
      };

      componentWillMount() {
        this.context.store.dispatch(actionCreator(this.props));
      }

      render() {
        return factory(this.props);
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayNam(BaseComponent, 'withAction'))(
        WithActionFromProps
      );
    }

    return WithActionFromProps;
  };
}
