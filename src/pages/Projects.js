import React, { useEffect, useState } from "react";

import { Navbar } from "../components/layout/Navbar";

import api from "../services/Api";
import { NavLink } from "react-router-dom";
import { EmptyList } from "../components/layout/EmptyList";
import { Breadcrumb } from "../components/layout/Breadcrumb";


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

    return (
        <div className="single-project">

            <Navbar />

            <div className="container main-content">

                <Breadcrumb links={[
                    {
                        "url": "/",
                        "name": "Dashboard",
                    },
                    {
                        "url": "/projects",
                        "name": "Projects",
                    }
                ]} />

                <div className="main-action-bar">
                    <h1 className="main-title">Projects</h1>
                    <div className="main-action">
                        <NavLink to="/projects/create/" className="btn btn-primary">New Project</NavLink>
                    </div>
                </div>

                {projects.length === 0 && (
                    <EmptyList title="No project" content="Nothing to see here" />
                )}

                {projects.length > 0 && (
                    <div className="card">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Project Name</th>
                                <th scope="col">Column heading</th>
                                <th scope="col">Column heading</th>
                                <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id}>
                                        <td><NavLink to={"/project/" + project.id}>{project.name}</NavLink></td>
                                        <td>Column content</td>
                                        <td>Column content</td>
                                        <td className="actions"><NavLink to="/">Edit</NavLink><NavLink className="text-danger" to="/">Delete</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>

        </div>
    );
};
