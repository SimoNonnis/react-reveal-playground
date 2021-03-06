import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {
  HomePage,
  FadePage,
  FlipPage,
  RotatePage,
  ZoomPage,
  BouncePage,
  SlidePage,
  RollPage,
} from './components';

import './styles.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Reveal Playground</h1>

        <ul className="menu-list">
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
            <Link to="/slide">Slide</Link>
          </li>
          <li>
            <Link to="/roll">Roll</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/fade">
          <FadePage />
        </Route>
        <Route path="/flip">
          <FlipPage />
        </Route>
        <Route path="/rotate">
          <RotatePage />
        </Route>
        <Route path="/zoom">
          <ZoomPage />
        </Route>
        <Route path="/bounce">
          <BouncePage />
        </Route>
        <Route path="/slide">
          <SlidePage />
        </Route>
        <Route path="/roll">
          <RollPage />
        </Route>
      </Switch>
    </Router>
  );
}
