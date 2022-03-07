import React from 'react';
import { InputProps } from './interface';
import './style.css';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, onChange, value, error, type, placeholder }, ref) => {
        const errorClassName = error ? 'error' : '';
        return (
            <label className="input-container">
                {label && <div className="input-label">{label}</div>}
                <input
                    placeholder={placeholder}
                    type={type}
                    ref={ref}
                    value={value}
                    className={`input ${errorClassName} ${className || ''}`}
                    onChange={onChange}
                />
                {error && <div className="error-message">{error}</div>}
            </label>
        );
    }
);
