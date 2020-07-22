import React from "react";

import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Input } from "../../../components/layout/Input";


import api from "../../../services/Api";

export const EditFolderModal = ({isOpen, project, folder, toggle, onSaved}) => {
    const { register, handleSubmit, errors, setValue } = useForm();

    const onModalOpened = () => {
        setValue("name", (folder === null ? "" : folder.name));
    }

    const onFormSubmit = (data) => {
        if (folder === null) {
            api.post("projects/" + project.id + "/folders", data)
            .then((response) => {
                onSaved();
                toggle()
            });
        } else {
            api.put("folders/" + folder.id, data)
            .then((response) => {
                onSaved();
                toggle()
            });
        }
    };

    return (
        <Modal onOpened={onModalOpened} autoFocus={true} isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{project === null ? "Create Folder" : "Edit Folder"}</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(onFormSubmit)} className="white">
                    <Input
                        label="Folder Name"
                        error={errors.name}
                        placeholder="Please enter the name of the folder"
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
                </form>
            </ModalBody>
            <ModalFooter>
                <button onClick={handleSubmit(onFormSubmit)} type="button" className="btn btn-primary">{folder === null ? "Create" : "Save"}</button>
                <button onClick={toggle} type="button" className="btn btn-secondary">Close</button>
            </ModalFooter>
        </Modal>
    );
}
