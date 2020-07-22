import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Navbar } from "../../components/layout/Navbar";
import { Input } from "../../components/layout/Input";

import api from "../../services/Api";


export const CreateProjectPage = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const onFormSubmit = (data) => {
        api.post("projects", data)
        .then((response) => {
            props.history.push("/projects/" + response['project']['id'])
        });
    };

    return (
        <div className="create-project">
            <Navbar />

            <div className="main-content container">

                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink to="/">Dashboard</NavLink></li>
                    <li class="breadcrumb-item"><NavLink to="/projects">Projects</NavLink></li>
                    <li class="breadcrumb-item active">Create</li>
                </ol>

                <h1 className="main-title">Create Project</h1>

                <form onSubmit={handleSubmit(onFormSubmit)} className="white">

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

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">Create</button>
                        <NavLink to="/projects/" className="btn btn-secondary">Back</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};