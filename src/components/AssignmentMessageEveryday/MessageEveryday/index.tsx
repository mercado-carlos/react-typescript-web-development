import React from 'react';

import { Button } from '../Button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../Modal';
import { MESSAGE_EVERYDAY } from './constant';
import { MessageEverydayState } from './interface';
import './style.css';

class MessageEveryday extends React.Component<{}, MessageEverydayState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            showModal: false,
        };
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    checkEventPropagation = () => {
        console.log('Home Page Click');
    };

    handleShowModal = () => {
        this.setState({
            showModal: true,
        });
    };

    render() {
        const { showModal } = this.state;
        const { dayName, message } = MESSAGE_EVERYDAY[new Date().getDay()];

        return (
            <div onClick={this.checkEventPropagation}>
                <h1> Message Everyday </h1>
                <Button onClick={this.handleShowModal}>Get Your Message</Button>
                <Modal
                    modalBodyClassName="message-everyday-modal-body"
                    onClickOutsideModalBody={this.handleCloseModal}
                    show={showModal}
                >
                    <ModalHeader>Today is {dayName}!</ModalHeader>
                    <ModalBody>{message}</ModalBody>
                    <ModalFooter>
                        <Button
                            type="primary"
                            className="modal-button"
                            onClick={this.handleCloseModal}
                        >
                            Ok
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default MessageEveryday;
