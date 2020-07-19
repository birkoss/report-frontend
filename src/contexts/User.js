import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";

export const UserContext = React.createContext();

export default ({children}) => {
    const savedToken = Cookies.get("user_token") || "";
    const savedData = JSON.parse(Cookies.get("user_data") || "{}") || {};

    console.log("SavedToken: (" + savedToken + ")");
    const [token, setToken] = useState(savedToken);
    const [data, setData] = useState(savedData);

    const defaultContext = {
        token,
        setToken,
        data,
        setData,
    };

    /* Saved in cookie when token or data changes */
    useEffect(() => {
        Cookies.set("user_token", token);
        Cookies.set("user_data", JSON.stringify(data));
    }, [token, data]);

    console.log("UserContext: (" + token + ")", defaultContext);

    return (
        <UserContext.Provider value={defaultContext}>
            {children}
        </UserContext.Provider>
    );
}
