import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Navbar } from "../../components/layout/Navbar";
import { Input } from "../../components/layout/Input";

import api from "../../services/Api";
import { Loading } from "../../components/layout/Loading";


export const CreateLogPage = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [ project, setProject ] = useState(null);

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

    const onFormSubmit = (data) => {
        api.post("projects/" + project['id'] + "/logs", data)
        .then((response) => {
            props.history.push("/project/" + project['id'])
        });
    };

    return (
        <div className="create-log">
            <Navbar />

            {project === null && (
                <Loading fullscreen={true} />
            )}

            {project !== null && (
                <div className="main-content container">

                    <h1 className="main-title">Create Log</h1>

                    <form onSubmit={handleSubmit(onFormSubmit)} className="white">

                        <Input
                            label="Log Name"
                            error={errors.name}
                            placeholder="ex. Import Cron Results"
                            name="name"
                            register={
                                register({
                                    required: 'Log Name is required',
                                    minLength: {
                                        value: 5,
                                        message: 'Minimum length is 5',
                                    },
                                })
                            }
                        />

                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">Create</button>
                            <NavLink to={"/project/" + project['id']} className="btn btn-secondary">Back</NavLink>
                        </div>
                    </form>
                </div>
            )}

        </div>
    );
};
