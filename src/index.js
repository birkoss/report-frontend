import React from "react";
import ReactDOM from "react-dom";

import UserContext from "./contexts/User";

import App from "./App";

ReactDOM.render(
    <UserContext>
        <App />
    </UserContext>,
    document.getElementById("root")
);
