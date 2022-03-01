import React from 'react';

import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { ReusableButtonProps, ReusableButtonState } from './interface';

class ReusableButton extends React.Component<
    ReusableButtonProps,
    ReusableButtonState
> {
    constructor(props: ReusableButtonProps) {
        super(props);

        this.state = {
            selectedButtonIndex: null,
        };
    }

    handleButtonGroupClick = (selected: number) => {
        this.setState({
            selectedButtonIndex: selected,
        });
    };

    render() {
        const { selectedButtonIndex } = this.state;

        return (
            <div>
                <h1>Reusable Buttons</h1>
                <h2>Primary</h2>
                <Button
                    type="primary"
                    onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }}
                >
                    Yes
                </Button>
                <h2>Default</h2>
                <Button
                    onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }}
                >
                    Yes
                </Button>
                <h2>Button Group</h2>
                <ButtonGroup
                    direction="row"
                    onClick={this.handleButtonGroupClick}
                    selected={selectedButtonIndex}
                >
                    <Button
                        onClick={function (): void {
                            throw new Error('Function not implemented.');
                        }}
                    >
                        Yes
                    </Button>
                    <Button
                        onClick={function (): void {
                            throw new Error('Function not implemented.');
                        }}
                    >
                        No
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default ReusableButton;
