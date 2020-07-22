import React, { useEffect, useState } from "react";

import { Navbar } from "../../components/layout/Navbar";
import { Loading } from "../../components/layout/Loading";

import api from "../../services/Api";
import { NavLink } from "react-router-dom";
import { EmptyList } from "../../components/layout/EmptyList";
import { Breadcrumb } from "../../components/layout/Breadcrumb";



export const ProjectSinglePage = (props) => {
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
    }, [props]);

    return (
        <div className="single-project page">

            <Navbar />

            {project === null && (
                <Loading fullscreen={true} />
            )}

            {project !== null && (
                <div className="container main-content">

                    <Breadcrumb links={[
                        {
                            "url": "/",
                            "name": "Dashboard",
                        },
                        {
                            "url": "/projects",
                            "name": "Projects",
                        },
                        {
                            "url": "/projects/" + project.id,
                            "name": project.name,
                        }
                    ]} />

                    <div className="main-action-bar">
                        <h1 className="main-title">{project['name']}</h1>
                        <div className="main-action">
                            <NavLink to={"/projects/" + project['id'] + "/folders/create"} className="btn btn-primary">New Folder</NavLink>
                        </div>
                    </div>

                    {project.folders.length === 0 && (
                        <EmptyList title="No Folder" content="Nothing to see here" />
                    )}

                    {project.folders.length > 0 && (
                        <div className="card">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Folder Name</th>
                                    <th scope="col">Normal</th>
                                    <th scope="col">Warning</th>
                                    <th scope="col">Alert</th>
                                    <th scope="col">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {project.folders.map((folder) => (
                                        <tr key={folder.id}>
                                            <td><NavLink to={"/folders/" + folder.id}>{folder.name}</NavLink></td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td className="actions"><NavLink to="/">Edit</NavLink><NavLink className="text-danger" to="/">Delete</NavLink></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                </div>
            )}

        </div>
    );
};
