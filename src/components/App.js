import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route render={( {location} ) => (
          <div className="container">
            <Nav />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={200}
                classNames="fade">
                  <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/contact' component={Contact} />
                    <Route render={() => <p>Not found</p>} />
                  </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )} />
    </Router>
    )
  }
}
