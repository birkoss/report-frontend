import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../contexts/User";
import api from "../../services/Api";

export const Navbar = (props) => {
    const { setToken } = useContext(UserContext);

    const logout = () => {
        api.setToken("");
        setToken("");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Reports</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/settings">Settings</NavLink>
                        </li>
                        <li className="nav-item"><button onClick={logout} className="nav-link btn btn-link">Logout</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
