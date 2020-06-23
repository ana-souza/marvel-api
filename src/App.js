import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {

  return (
    <Router>
      <Switch>
          <Route exact path="/:page?" component={Home} />
          <Route path="/character/:id" component={Profile} />
      </Switch>
    </Router>
  )
  
}

export default App;
