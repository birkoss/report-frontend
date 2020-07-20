import React, { useEffect, useState } from "react";

import { Navbar } from "../components/layout/Navbar";
import { ProjectSummary } from "../components/projects/ProjectSummary";

import api from "../services/Api";
import { NavLink } from "react-router-dom";


export const ProjectsPage = (props) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get("projects")
        .then((response) => {
            if (response['status'] === 200) {
                setProjects(response['projects']);
            }
        });
    }, []);

    const deleteProject = (ev) => {
        ev.preventDefault();
        alert("@TODO");
    };

    const editProject = (project) => {
        console.log("EDIT", project);
    };

    return (
        <div className="single-project">

            <Navbar />

            <div className="container main-content">
                <div className="main-action-bar">
                    <h1 className="main-title">Projects</h1>
                    <div className="main-action">
                        <NavLink to="/projects/create/" className="btn btn-primary">New Project</NavLink>
                    </div>
                </div>

                {projects.map((project) => (
                    <ProjectSummary
                        key={project.id}
                        project={project}
                        onEditClicked={
                            () => editProject(project)
                        }
                        onDeleteClicked={deleteProject}
                    />
                ))}
            </div>

        </div>
    );
};
