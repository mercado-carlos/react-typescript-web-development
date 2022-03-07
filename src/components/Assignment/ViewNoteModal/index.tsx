import React from 'react';
import { Button } from '../Button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../Modal';
import { ViewNoteModalProps } from './interface';
import './style.css';

export const ViewNoteModal: React.FC<ViewNoteModalProps> = ({
    onClickOutsideModalBody,
    note,
    onEditNote,
}) => {
    const { content, title } = note;

    return (
        <Modal
            onClickOutsideModalBody={onClickOutsideModalBody}
            modalBodyClassName="view-note-modal"
        >
            <ModalHeader className="header">
                <div className="title">{title}</div>
                <Button
                    onClick={onEditNote}
                    type="primary"
                    className="edit-button"
                >
                    Edit
                </Button>
            </ModalHeader>
            <ModalBody className="note-modaly-body">
                <div>{content}</div>
            </ModalBody>
            <ModalFooter>
                <Button
                    type="primary"
                    onClick={onClickOutsideModalBody}
                    className="ok-button"
                >
                    Ok
                </Button>
            </ModalFooter>
        </Modal>
    );
};
