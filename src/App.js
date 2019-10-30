import React from 'react';
import './App.css';
import Login from './components/login'
import Home from './components/home'
import Checkboxs from './components/check'
import Props from './components/props'
import Modularization from './components/modularization'
import { Provider } from 'react-redux'
import store from './store/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Checkboxs" component={Checkboxs}/> 
          <Route path="/Props" component={Props}/> 
          <Route path="/" component={Modularization}/>
        </Switch>
      </Router>
      </Provider>
  </div>
  );
}

export default App;
