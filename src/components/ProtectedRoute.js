import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../contexts/User";

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const { token } = useContext(UserContext);

    return <Route {...rest} render={
        (props) => {
            if (token !== "") {
                return <Component {...props} />
            }

            return <Redirect to={
                {
                    pathname: "/",
                    state: {
                        from: props.location
                    }
                }
            } />
        }
    } />;
};