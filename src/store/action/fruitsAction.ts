import { Store } from 'redux';
import { FruitsReducerAction } from '../reducer/fruitsReducer';
import { StoreStateType } from '../reducer/rootReducer';

class FruitsAction {
    static ADD_FRUITS = 'ADD_FRUITS';

    addFruits =
        (fruits: string[]) =>
        (store: Store<StoreStateType>): FruitsReducerAction => {
            console.log(store.getState());
            return { type: FruitsAction.ADD_FRUITS, fruits };
        };
}

export default FruitsAction;
