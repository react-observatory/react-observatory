import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './Home.css';

class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    up: PropTypes.func
  };

  state = { counter: 0 };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Observatory</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/containers/Home/Home.js</code> and save
          to reload.
        </p>
        <nav>
          <Link to="/about">About</Link>
          <br />
          <Link to="/blog">Blog</Link>
        </nav>
        <div>
          Component state:{' '}
          <button
            onClick={() =>
              this.setState(() => ({ counter: this.state.counter + 1 }))
            }
          >
            {this.state.counter}
          </button>
        </div>
        <div>
          Redux state:{' '}
          <button onClick={() => this.props.up()}>{this.props.counter}</button>
        </div>
      </div>
    );
  }
}

export default Home;
