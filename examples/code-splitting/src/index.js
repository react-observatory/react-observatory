import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './vendor';
import configureStore from './configureStore';
import './index.css';
import HomePage from './containers/Home';
import About from './containers/About/Loadable';
import Blog from './containers/Blog/Loadable';

class AppRoot extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<AppRoot />, document.getElementById('root'));

// registerServiceWorker();
