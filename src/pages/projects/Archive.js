import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { EmptyList } from "../../components/layout/EmptyList";
import { Breadcrumb } from "../../components/layout/Breadcrumb";
import { Navbar } from "../../components/layout/Navbar";

import api from "../../services/Api";
import { EditProjectModal } from "./modals/Edit";
import { ConfirmationModal } from "../../components/layout/modals/Confirmation";

export const ProjectArchivePage = (props) => {
    const [projects, setProjects] = useState([]);
    const [editProjectModalVisible, setEditProjectModalVisible] = useState(false);
    const [deleteProjectModalVisible, setDeleteProjectModalVisible] = useState(false);

    const [highlightedProject, setHighlightedProject] = useState(null);

    const getProjects = () => {
        api.get("projects")
        .then((response) => {
            if (response['status'] === 200) {
                setProjects(response['projects']);
            }
        });
    }

    const deleteProject = () => {
        if (highlightedProject !== null) {
            api.delete("projects/" + highlightedProject.id)
            .then((response) => {
                if (response['status'] === 200) {
                    setHighlightedProject(null);
                    getProjects();
                }
            });
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className="archive-project">

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
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={
                                () => {
                                    setHighlightedProject(null);
                                    setEditProjectModalVisible(true);
                                }
                            }
                        >New Project</button>
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
                                <th scope="col">Total Folders</th>
                                <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id}>
                                        <td><NavLink to={"/projects/" + project.id}>{project.name}</NavLink></td>
                                        <td>{project.folders.length}</td>
                                        <td className="actions">
                                            <button
                                                className="btn btn-link"
                                                onClick={
                                                    () => {
                                                        setHighlightedProject(project);
                                                        setEditProjectModalVisible(true);
                                                    }
                                                }
                                            >Edit</button>
                                            <button
                                                className="btn btn-link text-danger"
                                                onClick={
                                                    () => {
                                                        setHighlightedProject(project);
                                                        setDeleteProjectModalVisible(true);
                                                    }
                                                }
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>

            <EditProjectModal
                project={highlightedProject}
                toggle={
                    () => setEditProjectModalVisible(!editProjectModalVisible)
                }
                isOpen={editProjectModalVisible}
                onSaved={
                    () => getProjects()
                }
            />

            <ConfirmationModal
                isOpen={deleteProjectModalVisible}
                toggle={
                    () => setDeleteProjectModalVisible(!deleteProjectModalVisible)
                }
                content={"Are you sure you want to delete the project " + (
                    highlightedProject !== null ? highlightedProject.name : ""
                ) + "?"}
                button="Delete"
                onConfirmed={deleteProject}
            />

        </div>
    );
};
