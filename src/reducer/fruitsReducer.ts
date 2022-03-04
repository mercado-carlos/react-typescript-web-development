import { Reducer } from 'redux';

export interface FruitsAction {
    type: string;
    fruits: string[];
}

export const fruitsReducer: Reducer<string[], FruitsAction> = (
    state = [],
    action
) => {
    switch (action.type) {
        case 'ADD_FRUITS':
            return [...state, ...action.fruits];

        default:
            return state;
    }
};
