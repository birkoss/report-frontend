import React from "react";
import auth from "../Auth";

export const AppLayout = (props) => {
    return (
        <div>
            <h1>App Layout</h1>
            <div>
                <button onClick={
                    () => {
                        auth.logout(() => {
                            props.history.push("/");
                        });
                    }
                }>Logout</button>
            </div>
        </div>
    )
};