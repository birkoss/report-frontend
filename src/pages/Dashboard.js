import React, { useContext } from "react";


import { Navbar } from "../components/layout/Navbar";

import { LoginPage } from "./Login";
import { Notifications } from "../components/dashboard/Notifications";
import { ProjectList } from "../components/projects/ProjectList";

import { UserContext } from "../contexts/User";

export const DashboardPage = (props) => {
    const { token, setToken } = useContext(UserContext);

    /* Not logged in, show the Login Page instead */
    if (token === "") {
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
                            setToken("");
                        }
                    }>Logout</button>
                </div>
            </div>
        </div>
    );
}
