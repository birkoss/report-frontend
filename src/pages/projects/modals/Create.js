import React from "react";

import { useForm } from "react-hook-form";

import { Input } from "../../../components/layout/Input";

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import api from "../../../services/Api";


export const CreateProjectModal = ({isOpen, toggle, onCreated}) => {
    const { register, handleSubmit, errors } = useForm();

    const onFormSubmit = (data) => {
        api.post("projects", data)
        .then((response) => {
            onCreated();
            toggle()
        });
    };

    return (
        <Modal autoFocus={true} isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Project</ModalHeader>
            <ModalBody>
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
                </form>
            </ModalBody>
            <ModalFooter>
                <button onClick={handleSubmit(onFormSubmit)} type="button" className="btn btn-primary">Create</button>
                <button onClick={toggle} type="button" className="btn btn-secondary">Close</button>
            </ModalFooter>
        </Modal>
    );
}
