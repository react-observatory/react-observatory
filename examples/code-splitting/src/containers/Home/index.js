import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouterAction } from 'react-observatory';
import Home from './Home';

const mapStateToProps = ({ globalReducer }) => ({ counter: globalReducer });

const mapDispatchToProps = {
  up: () => ({ type: 'Up' })
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouterAction('RouterAction.Home')
)(Home);
