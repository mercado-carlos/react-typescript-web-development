import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../Modal';
import { Textarea } from '../Textarea';
import { ManageNoteModalProps, ManageNoteModalState } from './interface';
import './style.css';

export class ManageNoteModal extends React.Component<
    ManageNoteModalProps,
    ManageNoteModalState
> {
    constructor(props: ManageNoteModalProps) {
        super(props);

        const { note } = props;

        this.state = {
            title: note ? note.title : '',
            content: note ? note.content : '',
        };
    }

    handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: event.currentTarget.value,
        });
    };

    handleTextareaOnChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        this.setState({
            content: event.currentTarget.value,
        });
    };

    handleButtonClick = () => {
        const { note } = this.props;
        const { title, content } = this.state;
        const currentDate = new Date();

        this.props.manageNote({
            id: note ? note.id : (+currentDate).toString(),
            title,
            content,
            createdDate: note ? note.createdDate : currentDate.toISOString(),
            modifiedDate: currentDate.toISOString(),
        });
    };

    render() {
        const { onClickOutsideModalBody, currentAppNoteAction } = this.props;
        const { title, content } = this.state;

        return (
            <Modal
                onClickOutsideModalBody={onClickOutsideModalBody}
                modalBodyClassName="manage-note-modal"
            >
                <ModalHeader>{currentAppNoteAction}</ModalHeader>
                <ModalBody>
                    <Input
                        onChange={this.handleInputOnChange}
                        className="input-title"
                        value={title}
                        placeholder="Title"
                    />
                    <br />
                    <Textarea
                        onChange={this.handleTextareaOnChange}
                        rows={15}
                        placeholder="Content"
                        value={content}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button type="primary" onClick={this.handleButtonClick}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
