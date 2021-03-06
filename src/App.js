import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './pages/Home/Home';


import Login from './pages/Login/Login';



import Dashboard from './pages/Dashboard/Dashboard';

import Documentation from './pages/Documentation/Documentation';
import Endpoints from './pages/Documentation/Endpoints';
import Authentication from './pages/Documentation/Authentication';
import Errors from './pages/Documentation/Errors';
import Getstarted from './pages/Documentation/Getstarted';
// import * as actions from './store/actions/auth';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/documentation" exact component={Documentation} />
          <Route path="/endpoints" exact component={Endpoints} />
          <Route path="/authentication" exact component={Authentication} />
          <Route path="/errors" exact component={Errors} />
          <Route path="/get-started" exact component={Getstarted} />
          <Route path="/login" exact component={Login} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;
