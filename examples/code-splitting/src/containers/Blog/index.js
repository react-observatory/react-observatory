import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectReducer, injectEpic, withRouterAction } from 'react-observatory';
import reducer from './reducers';
import Blog from './Blog';
import epic from './epics';

function mapStateToProps(state) {
  return {
    blog: state.blog
  };
}

const mapDispatchToProps = { up: () => ({ type: 'Up100' }) };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer('blog', reducer);

const withEpic = injectEpic(epic);

export default compose(
  withReducer,
  withEpic,
  withRouterAction('RouterActions.Blog'),
  withConnect
)(Blog);
