import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import HomePage from "./components/pages/HomePage";
import Main from './../src/components/pages/Main'
import LoginPage from "./components/pages/LoginPage";
import './index.css'

const App = () => 
  <div> 
    <Router>
      <Route path="/" exact component={LoginPage} />  
    </Router>
  </div>

export default App;
