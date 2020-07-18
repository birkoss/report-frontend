import React from 'react';
import { Route, Switch } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";

import { AppLayout } from "./components/AppLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { DashboardPage } from './pages/Dashboard';

import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>

      </header>
    </div>
  );
}

export default App;
