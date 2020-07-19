import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { DashboardPage } from "./pages/Dashboard";
import { CreateProject } from "./pages/CreateProject";
import { ProjectDetails } from "./components/projects/ProjectDetails";

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
    }, []);

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
                    <ProtectedRoute path="/project/create" component={CreateProject} />
                    <ProtectedRoute path="/project/:id" component={ProjectDetails} />
                    <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
