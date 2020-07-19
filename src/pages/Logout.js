import React from 'react';
import { Redirect } from "react-router-dom";

import auth from "../Auth";

export const LogoutPage = (props) => {
    auth.logout(() => {
        props.history.push("/");
    });
    
    return (
        <Redirect to="/" />
    )
};