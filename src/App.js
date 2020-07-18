import React from 'react';
import { Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { DashboardPage } from './pages/Dashboard';

import './App.css';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  );
}

export default App;
