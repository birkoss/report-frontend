import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export const ConfirmationModal = ({isOpen, toggle, content, button, onConfirmed}) => {
    return (
        <Modal autoFocus={true} isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Confirmation</ModalHeader>
            <ModalBody>
                <p>{content}</p>
            </ModalBody>
            <ModalFooter>
                <button onClick={
                    () => {
                        onConfirmed()
                        toggle()
                    }
                } type="button" className="btn btn-danger">{button}</button>
                <button onClick={toggle} type="button" className="btn btn-primary">Cancel</button>
            </ModalFooter>
        </Modal>
    );
}
