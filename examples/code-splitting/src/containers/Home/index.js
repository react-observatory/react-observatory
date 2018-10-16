import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  withAction,
  withActionFromProps
} from '@react-observatory/with-action';
import { withRouterAction } from '@react-observatory/with-router-action';
import Home from './Home';

const mapStateToProps = ({ globalReducer }) => ({ counter: globalReducer });

const mapDispatchToProps = {
  up: () => ({ type: 'Up' })
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAction('Action'),
  withActionFromProps(props => ({ type: 'ActionFromProps', payload: props })),
  withRouterAction('RouterAction.Home')
)(Home);
