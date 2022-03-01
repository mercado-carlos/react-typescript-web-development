import React from 'react';

import Modal from '../Modal';
import { HomePageState } from './interface';

class HomePage extends React.Component<{}, HomePageState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            showModal: true,
        };
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    checkEventPropagation = () => {
        console.log('Home Page click');
    };

    render() {
        const { showModal } = this.state;

        return (
            <div onClick={this.checkEventPropagation}>
                <h1>Home Page</h1>
                <Modal onClose={this.handleCloseModal} show={showModal} />
            </div>
        );
    }
}

export default HomePage;
