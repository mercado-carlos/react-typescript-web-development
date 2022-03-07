import React from 'react';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { PromptModalProps } from './interface';
import './style.css';

export const PromptModal: React.FC<PromptModalProps> = ({
    questionText,
    onNoClick,
    onYesClick,
}) => {
    return (
        <Modal modalBodyClassName="prompt-modal">
            <div className="question-text">{questionText}</div>
            <div className="buttons">
                <Button onClick={onYesClick} type="primary">
                    Yes
                </Button>
                <Button onClick={onNoClick}>No</Button>
            </div>
        </Modal>
    );
};
