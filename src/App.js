import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { DashboardPage } from "./pages/Dashboard";

import { CreateFolderPage } from "./pages/folders/Create";
import { FolderArchivePage } from "./pages/folders/Archive";

import { CreateProjectPage } from "./pages/projects/Create";
import { ProjectSinglePage } from "./pages/projects/Single";
import { ProjectArchivePage } from "./pages/projects/Archive";

import { Loading } from "./components/layout/Loading";

import api from "./services/Api";

import { UserContext } from "./contexts/User";

import "./App.css";



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
                    <ProtectedRoute exact path="/projects" component={ProjectArchivePage} />
                    <ProtectedRoute exact path="/projects/create" component={CreateProjectPage} />
                    <ProtectedRoute exact path="/projects/:id/edit" component={CreateProjectPage} />
                    <ProtectedRoute exact path="/projects/:id/folders/create" component={CreateFolderPage} />
                    <ProtectedRoute exact path="/projects/:id" component={ProjectSinglePage} />
                    <ProtectedRoute exact path="/folders/:id" component={FolderArchivePage} />
                    <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
