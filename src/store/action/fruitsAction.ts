import { Store } from 'redux';
import { FruitsReducerAction } from '../reducer/fruitsReducer';

class FruitsAction {
    static ADD_FRUITS = 'ADD_FRUITS';

    addFruits =
        (fruits: string[]) =>
        (store: Store): FruitsReducerAction => {
            console.log(store.getState());
            return { type: FruitsAction.ADD_FRUITS, fruits };
        };
}

export default FruitsAction;
