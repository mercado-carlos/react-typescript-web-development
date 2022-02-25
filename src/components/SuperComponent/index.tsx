import React from 'react';

export default class SuperComponent extends React.Component {
    printSuperComponent = () => {
        alert('Super Component');
    };

    render() {
        return (
            <div>
                <h2>SuperComponent</h2>
            </div>
        );
    }
}
