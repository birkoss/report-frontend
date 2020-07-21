import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { DashboardPage } from "./pages/Dashboard";
import { CreateProject } from "./pages/CreateProject";
import { ProjectsPage } from "./pages/Projects";
import { CreateLogPage } from "./pages/logs/Create";

import { Loading } from "./components/layout/Loading";

import api from "./services/Api";

import { UserContext } from "./contexts/User";

import "./App.css";
import { ProjectSinglePage } from "./pages/projects/Single";
import { LogArchivePage } from "./pages/logs/Archive";


function App() {
    const { token } = useContext(UserContext);
    const [isLoading, setLoading] = useState(token !== "");

    useEffect(() => {
        if (isLoading) {
            api.setToken(token);
            api.get("status").then((response) => {
                if (response.status === 200) {
                    setLoading(false);
                }
            });
        }
    });

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <BrowserRouter>
            <div id="App">
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <ProtectedRoute exact path="/projects" component={ProjectsPage} />
                    <ProtectedRoute exact path="/projects/create" component={CreateProject} />
                    <ProtectedRoute exact path="/project/:id/edit" component={CreateProject} />
                    <ProtectedRoute exact path="/project/:id/logs/create" component={CreateLogPage} />
                    <ProtectedRoute exact path="/project/:id" component={ProjectSinglePage} />
                    <ProtectedRoute exact path="/log/:id" component={LogArchivePage} />
                    <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
