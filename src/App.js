import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';

import './styles.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Reveal Playground</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
