import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home, Fade, Flip, Rotate, Zoom, Bounce, Roll } from './components';

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
          <li>
            <Link to="/fade">Fade</Link>
          </li>
          <li>
            <Link to="/flip">Flip</Link>
          </li>
          <li>
            <Link to="/rotate">Rotate</Link>
          </li>
          <li>
            <Link to="/zoom">Zoom</Link>
          </li>
          <li>
            <Link to="/bounce">Bounce</Link>
          </li>
          <li>
            <Link to="/roll">Roll</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fade">
          <Fade />
        </Route>
        <Route path="/flip">
          <Flip />
        </Route>
        <Route path="/rotate">
          <Rotate />
        </Route>
        <Route path="/zoom">
          <Zoom />
        </Route>
        <Route path="/bounce">
          <Bounce />
        </Route>
        <Route path="/roll">
          <Roll />
        </Route>
      </Switch>
    </Router>
  );
}
