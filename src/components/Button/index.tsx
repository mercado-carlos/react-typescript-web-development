import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type,
    className,
}) => {
    const currentType = type || 'default';

    return (
        <button
            className={`button-${currentType} ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
