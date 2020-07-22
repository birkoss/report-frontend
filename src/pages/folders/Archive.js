import React, { useEffect, useState } from "react";

import { Navbar } from "../../components/layout/Navbar";

import api from "../../services/Api";
import { Loading } from "../../components/layout/Loading";
import { Breadcrumb } from "../../components/layout/Breadcrumb";


export const FolderArchivePage = (props) => {
    const [folder, setFolder] = useState(null);

    useEffect(() => {
        api.get("folders/" + props.match.params.id)
        .then((response) => {
            console.log(response);
            if (response['status'] === 200) {
                setFolder(response['folder']);
            }
        });
    }, [props]);

    return (
        <div className="single-folder">

            <Navbar />

            {folder === null && (
                <Loading fullscreen={true} />
            )}

            {folder !== null && (

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
                            "url": "/projects/" + folder.project.id,
                            "name": folder.project.name,
                        },
                        {
                            "url": "/folders/" + folder.id,
                            "name": folder.name,
                        }
                    ]} />

                    <h1 className="main-title">{folder.name}</h1>

                    {/*projects.length === 0 && (
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
                                    )*/}

                </div>
            )}

        </div>
    );
};
