import React from "react";

import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Input } from "../../../components/layout/Input";


import api from "../../../services/Api";

export const EditProjectModal = ({isOpen, project, toggle, onSaved}) => {
    const { register, handleSubmit, errors, setValue } = useForm();

    const onModalOpened = () => {
        setValue("name", (project === null ? "" : project.name));
    }

    const onFormSubmit = (data) => {
        if (project === null) {
            api.post("projects", data)
            .then((response) => {
                onSaved();
                toggle()
            });
        } else {
            api.put("projects/" + project.id, data)
            .then((response) => {
                onSaved();
                toggle()
            });
        }
    };

    return (
        <Modal onOpened={onModalOpened} autoFocus={true} isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{project === null ? "Create Project" : "Edit Project"}</ModalHeader>
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
                <button onClick={handleSubmit(onFormSubmit)} type="button" className="btn btn-primary">{project === null ? "Create" : "Save"}</button>
                <button onClick={toggle} type="button" className="btn btn-secondary">Close</button>
            </ModalFooter>
        </Modal>
    );
}
