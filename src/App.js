import React from 'react';
import './App.css';
import Login from './components/login'
import Home from './components/home'
import Checkboxs from './components/check'
import Props from './components/props'
import Redux from './components/redux'
import ReactRedux from './components/reactredux'
import Modularization from './components/modularization'
// import { Provider } from 'react-redux'
// import store from './store/index'
import {Provider} from './plugins/my-react-redux'
import store from './plugins/my-store'
import {BrowserRouter, Route,Link} from './plugins/my-react-router-dom'
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
    <Provider store={store}>
     {/*  <Router>
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Checkboxs" component={Checkboxs}/> 
          <Route path="/Props" component={Props}/> 
          <Route path="/" exact component={Modularization}/>
        </Switch>
      </Router> */}
      <BrowserRouter>
        <Route path="/ReactRedux" component={React}></Route>
        <Route path="/" exact component={ReactRedux}/>
        <Link to="/ReactRedux">ReactRedux</Link>
      </BrowserRouter>
      </Provider>
  </div>
  );
}

export default App;
