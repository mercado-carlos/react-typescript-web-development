import React from 'react';
import { TextareaProps } from './interface';
import './style.css';

export const Textarea: React.FC<TextareaProps> = ({
    className,
    placeholder,
    rows,
    cols,
    onChange,
    value,
}) => {
    return (
        <textarea
            onChange={onChange}
            placeholder={placeholder}
            className={`textarea ${className || ''} `}
            rows={rows}
            cols={cols}
            value={value}
        />
    );
};
