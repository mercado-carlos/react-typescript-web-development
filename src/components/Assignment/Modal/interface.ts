export interface ModalProps {
    show?: boolean;
    modalBodyClassName?: string;
    onClickOutsideModalBody?(): void;
}

export interface ModalHeaderProps {
    className?: string;
}

export interface ModalBodyProps {
    className?: string;
}

export interface ModalFooterProps {
    className?: string;
}
