import React from 'react';
import { NoteProps } from './interface';
import './style.css';

export const Note: React.FC<NoteProps> = ({
    className,
    note,
    onClickCloseButton,
    onClickNote,
}) => {
    const { id, title, modifiedDate } = note;

    return (
        <div className="note-container">
            <div
                className={`note ${className}`}
                onClick={() => onClickNote(note)}
                key={id}
            >
                <div>{title}</div>
                <div className="lmd">
                    Last Modified Date:{' '}
                    {new Date(modifiedDate).toLocaleTimeString()}
                </div>
            </div>

            <div onClick={onClickCloseButton(note)} className="close-button">
                x
            </div>
        </div>
    );
};
