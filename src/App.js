import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Redirect, Route, Switch } from 'react-router-dom';
import Projects from './Projects'
import Contact from './Contact'
import Home from './Home'
import "animate.css"

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
