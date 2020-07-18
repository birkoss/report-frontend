import React from "react";

import { LoginPage } from "./LoginPage";

import auth from "../Auth";

export const DashboardPage = (props) => {
    /* Not logged in, show the Login Page instead */
    if (!auth.isAuthenticated()) {
        return <LoginPage history={props.history} />;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={
                () => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }
            }>Logout</button>
        </div>
    );
}
