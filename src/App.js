import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { DashboardPage } from "./pages/Dashboard";
import { LogoutPage } from "./pages/Logout";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateProject from "./components/projects/CreateProject";

import "./App.css";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <ProtectedRoute path="/project/create" component={CreateProject} />
                    <ProtectedRoute path="/project/:id" component={ProjectDetails} />
                    <ProtectedRoute path="/logout" component={LogoutPage} />
                    <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
