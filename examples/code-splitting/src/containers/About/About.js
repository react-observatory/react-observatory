import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">About</h1>
      </header>
      <p className="App-intro">
        This is a static dynamically loaded component component. Edit{' '}
        <code>src/containers/About.js</code> and save to reload.
      </p>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Blog">Blog</Link>
      </nav>
    </div>
  );
};

export default About;
