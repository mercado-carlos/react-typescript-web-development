import React from 'react';
import ReactDOM from 'react-dom';

import {
    ModalBodyProps,
    ModalFooterProps,
    ModalHeaderProps,
    ModalProps,
} from './interface';
import './style.css';

export class Modal extends React.Component<ModalProps> {
    root: HTMLDivElement;
    el: HTMLDivElement;

    constructor(props: ModalProps) {
        super(props);

        this.root = document.querySelector('#root') as HTMLDivElement;
        this.el = document.createElement('div');
    }

    componentDidMount() {
        this.root.appendChild(this.el);
    }
    componentWillUnmount() {
        this.root.removeChild(this.el);
    }

    removeOnClickPropagation = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.stopPropagation();
    };

    onClickOutsideModalBody = () => {
        const { onClickOutsideModalBody } = this.props;

        onClickOutsideModalBody && onClickOutsideModalBody();
    };

    render() {
        const { show = true, modalBodyClassName } = this.props;

        return show
            ? ReactDOM.createPortal(
                  <div
                      onClick={this.removeOnClickPropagation}
                      className="modal-container"
                  >
                      <div
                          onClick={this.onClickOutsideModalBody}
                          className="modal-overlay"
                      />
                      <div className={`modal-body ${modalBodyClassName || ''}`}>
                          {this.props.children}
                      </div>
                  </div>,
                  this.el
              )
            : null;
    }
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
    children,
    className,
}) => {
    return <div className={`modal-header ${className || ''}`}>{children}</div>;
};

export const ModalBody: React.FC<ModalBodyProps> = ({
    children,
    className,
}) => {
    return (
        <div className={`modal-body-children ${className || ''}`}>
            {children}
        </div>
    );
};

export const ModalFooter: React.FC<ModalFooterProps> = ({
    children,
    className,
}) => {
    return <div className={`modal-footer ${className || ''}`}>{children}</div>;
};
