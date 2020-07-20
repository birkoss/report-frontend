import React, { useEffect, useState } from "react";

import { Navbar } from "../components/layout/Navbar";

import api from "../services/Api";


export const ProjectDetails = (props) => {
    const [project, setProject] = useState(null);

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
    });

    return (
        <div className="single-project">

            <Navbar />

            <div className="container main-content">
                <h1>Single Project</h1>
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title</span>
                        <p>lorem ipsum...</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>aijas ijas ajisa</div>
                        <div>September 3rd, 2 AM</div>
                    </div>
                </div>
            </div>

        </div>
    );
};
