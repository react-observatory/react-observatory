import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import '../Home/Home.css';

const Blog = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Blog</h1>
      </header>
      <p className="App-intro">
        This page is loaded dynamically with reducer and logging epic.
        <br />
        <br />
        Edit <code>src/containers/Blog.js</code> and save to reload.
        <br />
        <br />
        Check the console to see the logging epic working, when you press the
        button.
      </p>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
      Async reducer: {props.blog}{' '}
      <button onClick={() => props.up()}>+10</button>
    </div>
  );
};

export default Blog;
