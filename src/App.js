import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <p>Login</p>
        </Route>
        <Route path="/products">
          <p>Products</p>
        </Route>
        <Route path="/">
          <p>Register</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
