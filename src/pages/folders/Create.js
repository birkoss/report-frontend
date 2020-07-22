import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Navbar } from "../../components/layout/Navbar";
import { Input } from "../../components/layout/Input";

import api from "../../services/Api";
import { Loading } from "../../components/layout/Loading";


export const CreateFolderPage = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [ project, setProject ] = useState(null);

    useEffect(() => {
        api.get("projects/" + props.match.params.id)
        .then((response) => {
            if (response['status'] === 200) {
                setProject(response['project']);
            } else {
                props.history.push("/");
            }
        });
    }, [props]);

    const onFormSubmit = (data) => {
        api.post("projects/" + project['id'] + "/folders", data)
        .then((response) => {
            props.history.push("/projects/" + project['id'])
        });
    };

    return (
        <div className="create-folder">
            <Navbar />

            {project === null && (
                <Loading fullscreen={true} />
            )}

            {project !== null && (
                <div className="main-content container">

                    <h1 className="main-title">Create Folder</h1>

                    <form onSubmit={handleSubmit(onFormSubmit)} className="white">

                        <Input
                            label="Folder Name"
                            error={errors.name}
                            placeholder="ex. Import Cron Results"
                            name="name"
                            register={
                                register({
                                    required: 'Folder Name is required',
                                    minLength: {
                                        value: 5,
                                        message: 'Minimum length is 5',
                                    },
                                })
                            }
                        />

                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">Create</button>
                            <NavLink to={"/projects/" + project['id']} className="btn btn-secondary">Back</NavLink>
                        </div>
                    </form>
                </div>
            )}

        </div>
    );
};
