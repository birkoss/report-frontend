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
                            "url": "/project/" + project.id,
                            "name": project.name,
                        }
                    ]} />

                    <div className="main-action-bar">
                        <h1 className="main-title">{project['name']}</h1>
                        <div className="main-action">
                            <NavLink to={"/project/" + project['id'] + "/logs/create"} className="btn btn-primary">New Log</NavLink>
                        </div>
                    </div>

                    {project.logs.length === 0 && (
                        <EmptyList title="No log" content="Nothing to see here" />
                    )}

                    {project.logs.length > 0 && (
                        <div className="card">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Log Name</th>
                                    <th scope="col">Normal</th>
                                    <th scope="col">Warning</th>
                                    <th scope="col">Alert</th>
                                    <th scope="col">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {project.logs.map((log) => (
                                        <tr key={log.id}>
                                            <td><NavLink to={"/log/" + log.id}>{log.name}</NavLink></td>
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
