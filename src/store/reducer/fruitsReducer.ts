import { Reducer } from 'redux';
import { createSelector } from 'reselect';

import FruitsActions from '../action/fruitsAction';
import { StoreStateType } from './rootReducer';

export interface FruitsReducerAction {
    type: string;
    fruits: string[];
}

export const fruitsReducer: Reducer<string[], FruitsReducerAction> = (
    state = [],
    action
) => {
    switch (action.type) {
        case FruitsActions.ADD_FRUITS:
            return [...state, ...action.fruits];

        default:
            return state;
    }
};

export const fruitsWithO = createSelector<StoreStateType, string[], string[]>(
    (state) => state.fruits,
    (fruits) => {
        console.log('recomputed');
        return fruits.filter((fruit) => fruit.includes('o'));
    }
);
