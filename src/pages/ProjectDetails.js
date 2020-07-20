import React, { useEffect, useState } from "react";

import { Navbar } from "../components/layout/Navbar";
import { Loading } from "../components/layout/Loading";

import api from "../services/Api";
import { NavLink } from "react-router-dom";


export const ProjectDetails = (props) => {
    const [project, setProject] = useState(null);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const projectID = props.match.params.id;

        api.get("projects/" + projectID)
        .then((response) => {
            if (response['status'] === 200) {
                setProject(response['project']);
            } else {
                props.history.push("/");
            }
        });
    }, []);

    console.log(project);

    return (
        <div className="single-project page">

            <Navbar />

            {project === null && (
                <Loading fullscreen={true} />
            )}

            {project !== null && (
                <div className="container main-content">

                    <div className="main-action-bar">
                        <h1 className="main-title">{project['name']}</h1>
                        <div className="main-action">
                            <NavLink to={"/projects/" + project['id'] + "/logs/create"} className="btn btn-primary">New Log</NavLink>
                        </div>
                    </div>


                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{project['name']}</span>
                            <p>lorem ipsum...</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>aijas ijas ajisa</div>
                            <div>September 3rd, 2 AM</div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
