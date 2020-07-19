import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";

import { UserContext } from "../contexts/User";

export const LogoutPage = (props) => {
    const { token, setToken } = useContext(UserContext);

    if (token !== "") {
        setToken("");

        return (
            <h1>Loading</h1>
        )
    }

    return (
        <Redirect to="/" />
    )
};