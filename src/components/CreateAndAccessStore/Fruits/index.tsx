import React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { FruitsProps, FruitsOwnProps, FruitsStateProps } from './interface';

class Fruits extends React.Component<FruitsProps> {
    render() {
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
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<
    FruitsStateProps,
    FruitsOwnProps,
    string[]
> = (state, ownProps) => {
    return {
        fruits: state,
    };
};

export default connect(mapStateToProps)(Fruits);
