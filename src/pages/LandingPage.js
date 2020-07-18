import React from 'react';

import auth from "../Auth";

export const LandingPage = (props) => {
    return (
        <div>
            Landing Page

            <button onClick={
                () => {
                    auth.login(() => {
                        props.history.push("/app");
                    });
                }
            }>Login</button>
        </div>
    )
};