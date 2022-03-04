import { Store } from 'redux';

class FruitsAction {
    static ADD_FRUITS = 'ADD_FRUITS';

    addFruits = (fruits: string[]) => (store: Store) => {
        console.log(store.getState());
        return { type: FruitsAction.ADD_FRUITS, fruits };
    };
}

export default FruitsAction;
