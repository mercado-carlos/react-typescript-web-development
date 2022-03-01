import React from 'react';
import { ButtonProps } from '../Button/interface';
import { ButtonGroupProps } from './interface';
import './style.css';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    children,
    selected,
    onClick,
    direction,
}) => {
    const directionClassName = direction === 'column' ? 'column' : 'row';

    return (
        <div className={`btn-group ${directionClassName}`}>
            {React.Children.map(
                children as React.ReactElement<ButtonProps>[],
                (child, index) => {
                    const selectedClassName =
                        selected === index ? 'btn-group-btn-selected' : '';
                    console.log(selectedClassName);

                    return React.isValidElement(child)
                        ? React.cloneElement(child, {
                              className: `btn-group-btn ${selectedClassName} ${directionClassName}`,
                              onClick: () => onClick(index),
                          })
                        : child;
                }
            )}
        </div>
    );
};
