export type ButtonGroupSelected = number | null;

export type ButtonGroupDirection = 'row' | 'column';

export interface ButtonGroupProps {
    selected: ButtonGroupSelected;
    onClick(selected: number): void;
    direction?: ButtonGroupDirection;
}
