import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
