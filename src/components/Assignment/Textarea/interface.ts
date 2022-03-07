import React from 'react';

export interface TextareaProps {
    className?: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
    onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void;
    value: string;
}
