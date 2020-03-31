import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/project/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/login' component={Signin} />
          <Route path='/signup' component={Signup}/>
          <Route path='/create' component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
