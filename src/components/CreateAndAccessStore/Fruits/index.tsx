import React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import FruitsAction from '../../../store/action/fruitsAction';
import { rootReducer } from '../../../store/reducer/rootReducer';

import {
    FruitsProps,
    FruitsOwnProps,
    FruitsStateProps,
    FruitsDispatchProps,
} from './interface';

class Fruits extends React.Component<FruitsProps> {
    clickAddFruits = () => {
        this.props.addFruits(['coconut', 'strawberry']);
    };

    render() {
        console.log('Fruits Render Called');
        const { ownerName, fruits } = this.props;

        return (
            <div>
                <h1>Owner Name: {ownerName}</h1>
                <h1>Fruits</h1>
                <ul>
                    {fruits.map((fruit) => (
                        <li key={fruit}>{fruit}</li>
                    ))}
                </ul>
                <button onClick={this.clickAddFruits}>Add Fruits</button>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<
    FruitsStateProps,
    FruitsOwnProps,
    ReturnType<typeof rootReducer>
> = (state, ownProps) => {
    console.log('Fruits Map State Props Called');
    return {
        fruits: state.fruits,
    };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
    FruitsDispatchProps,
    FruitsOwnProps
> = (dispatch: any, ownProps) => {
    const fruitsAction = new FruitsAction();

    return {
        addFruits: (fruits) => dispatch(fruitsAction.addFruits(fruits)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fruits);
