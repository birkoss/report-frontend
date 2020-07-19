import React from "react";


import { Navbar } from "../components/layout/Navbar";

import { LoginPage } from "./LoginPage";
import { Notifications } from "../components/dashboard/Notifications";
import { ProjectList } from "../components/projects/ProjectList";

import auth from "../Auth";

export const DashboardPage = (props) => {
    /* Not logged in, show the Login Page instead */
    if (!auth.isAuthenticated()) {
        return <LoginPage history={props.history} />;
    }

    return (
        <div>
            <Navbar />
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
                <div className="row">
                    <h1>Dashboard</h1>
                    <button onClick={
                        () => {
                            auth.logout(() => {
                                props.history.push("/");
                            });
                        }
                    }>Logout</button>
                </div>
            </div>
        </div>
    );
}
