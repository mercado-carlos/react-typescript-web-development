export interface FruitsOwnProps {
    ownerName: string;
}

export interface FruitsStateProps {
    fruits: string[];
}

export interface FruitsDispatchProps {
    addFruits(fruits: string[]): any;
}

export type FruitsProps = FruitsOwnProps &
    FruitsStateProps &
    FruitsDispatchProps;
