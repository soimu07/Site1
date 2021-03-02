import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Register from './pages/register'
import Login from './pages/login'
import Products from './pages/products'
import Error from './pages/error'
import './styles/main.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login">
         <Login/>   
       </Route>        
       <Route path="/products">
         <Products/>
       </Route>
       <Route path='/error'>
         <Error/>
       </Route>
       <Route path="/">
        <Register/>
      </Route>
    </Switch>
  </Router>
);

export default App;
