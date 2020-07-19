import React, { useContext } from "react";

import { LoginPage } from "./Login";

import { Navbar } from "../components/layout/Navbar";
import { Notifications } from "../components/Notifications";

import { UserContext } from "../contexts/User";

export const DashboardPage = (props) => {
    const { token } = useContext(UserContext);

    /* Not logged in, show the Login Page instead */
    if (token === "") {
        return <LoginPage history={props.history} />;
    }

    return (
        <div className="dashboard-page">
            <Navbar />

            <div className="main-content container">
                <div className="row">
                    <div className="col s12">
                        <h1 className="main-title">Notifications</h1>
                        <Notifications />
                    </div>
                </div>
            </div>

        </div>
    );
}
