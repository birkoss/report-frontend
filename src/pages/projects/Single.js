import React, { useEffect, useState } from "react";

import { Navbar } from "../../components/layout/Navbar";
import { Loading } from "../../components/layout/Loading";

import api from "../../services/Api";
import { NavLink } from "react-router-dom";
import { EmptyList } from "../../components/layout/EmptyList";
import { Breadcrumb } from "../../components/layout/Breadcrumb";
import { EditFolderModal } from "../folders/modals/Edit";
import { ConfirmationModal } from "../../components/layout/modals/Confirmation";



export const ProjectSinglePage = (props) => {
    const [project, setProject] = useState(null);
    const [editFolderModalVisible, setEditFolderModalVisible] = useState(false);
    const [deleteFolderModalVisible, setDeleteFolderModalVisible] = useState(false);

    const [highlightedFolder, setHighlightedFolder] = useState(null);

    const getProject = () => {
        const projectID = props.match.params.id;

        api.get("projects/" + projectID)
        .then((response) => {
            if (response['status'] === 200) {
                setProject(response['project']);
            } else {
                props.history.push("/");
            }
        });
    }

    const deleteFolder = () => {
        if (highlightedFolder !== null) {
            api.delete("folders/" + highlightedFolder.id)
            .then((response) => {
                if (response['status'] === 200) {
                    setHighlightedFolder(null);
                    getProject();
                }
            });
        }
    }

    useEffect(getProject, [props]);

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
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={
                                    () => {
                                        setHighlightedFolder(null);
                                        setEditFolderModalVisible(true);
                                    }
                                }
                            >New Folder</button>
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
                                            <td className="actions">
                                                <button
                                                    className="btn btn-link"
                                                    onClick={
                                                        () => {
                                                            setHighlightedFolder(folder);
                                                            setEditFolderModalVisible(true);
                                                        }
                                                    }
                                                >Edit</button>
                                                <button
                                                    className="btn btn-link text-danger"
                                                    onClick={
                                                        () => {
                                                            setHighlightedFolder(folder);
                                                            setDeleteFolderModalVisible(true);
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

                    <EditFolderModal
                        folder={highlightedFolder}
                        project={project}
                        toggle={
                            () => setEditFolderModalVisible(!editFolderModalVisible)
                        }
                        isOpen={editFolderModalVisible}
                        onSaved={
                            () => getProject()
                        }
                    />

                    <ConfirmationModal
                        isOpen={deleteFolderModalVisible}
                        toggle={
                            () => setDeleteFolderModalVisible(!deleteFolderModalVisible)
                        }
                        content={"Are you sure you want to delete the folder " + (
                            highlightedFolder !== null ? highlightedFolder.name : ""
                        ) + "?"}
                        button="Delete"
                        onConfirmed={deleteFolder}
                    />

                </div>
            )}

        </div>
    );
};
