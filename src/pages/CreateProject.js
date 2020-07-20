import React from "react";

import { useForm } from "react-hook-form";

import { Navbar } from "../components/layout/Navbar";
import { Input } from "../components/layout/Input";

import api from "../services/Api";


export const CreateProject = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const onFormSubmit = (data) => {
        api.post("projects", data)
        .then((response) => {
            props.history.push("/project/" + response['project']['id'])
        });
    };

    return (
        <div className="create-project">
            <Navbar />

            <div className="main-content container">
                <form onSubmit={handleSubmit(onFormSubmit)} className="white">
                    <h1 className="main-title">Create Project</h1>

                    <Input
                        label="Project Name"
                        error={errors.name}
                        placeholder="Please enter the name of the project"
                        name="name"
                        register={
                            register({
                                required: 'Project Name is required',
                                minLength: {
                                    value: 5,
                                    message: 'Minimum length is 5',
                                },
                            })
                        }
                    />

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};
