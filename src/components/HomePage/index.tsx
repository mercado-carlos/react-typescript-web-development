import React from 'react';

import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ButtonGroup>
                    <Button
                        type="primary"
                        onClick={function (): void {
                            throw new Error('Function not implemented.');
                        }}
                    >
                        Primary
                    </Button>
                    <Button
                        onClick={function (): void {
                            throw new Error('Function not implemented.');
                        }}
                    >
                        Default
                    </Button>
                    Test
                </ButtonGroup>
            </div>
        );
    }
}
