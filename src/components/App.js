import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route render={() => <p>Not found</p>} />
        </Switch>
      </div>
    </Router>
    )
  }
}
