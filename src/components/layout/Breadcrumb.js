import React from "react";
import { NavLink } from "react-router-dom";

export const Breadcrumb = ({links}) => {
    let current_link = links.pop();

    return (
        <ol className="breadcrumb">
            {links.map((single_link, index) => (
                <li key={index} className="breadcrumb-item"><NavLink to={single_link.url}>{single_link.name}</NavLink></li>
            ))}
            <li className="breadcrumb-item active">{current_link.name}</li>
        </ol>
    );
}
