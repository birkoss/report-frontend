import React from "react";
import { Link, NavLink } from "react-router-dom";

import auth from "../../Auth";

export const Navbar = (props) => {
    if (!auth.isAuthenticated()) {
        return null;
    }
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Reports</Link>

                <ul className="right">
                    <li><NavLink to="/project/create">Create Project</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li>
                    <li><NavLink to="/" className="btn btn-floating pink lighten-1">BI</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
