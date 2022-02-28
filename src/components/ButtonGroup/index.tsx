import React from 'react';

import { ButtonProps } from '../Button/interface';

export const ButtonGroup: React.FC = ({ children }) => {
    return (
        <>
            {React.Children.map(
                children as React.ReactElement<ButtonProps>,
                (child, index) => {
                    return React.isValidElement(child)
                        ? React.cloneElement(child, {
                              className: 'button-group-btn',
                              onClick: () => console.log(index),
                          })
                        : child;
                }
            )}
        </>
    );
};
