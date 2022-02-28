import React from 'react';
import './style.css';

import { InputProps } from './interface';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, onChange, value, error }, ref) => {
        const errorClassName = error ? 'error' : '';

        return (
            <label className="input-container">
                <div className="input-label">{label}</div>
                <input
                    ref={ref}
                    value={value}
                    className={`input ${errorClassName}`}
                    onChange={onChange}
                />
                {error && <div className="error-message">{error}</div>}
            </label>
        );
    }
);
