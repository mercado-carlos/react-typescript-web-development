import React from 'react';

import {
    withTrackClickProps,
    withTrackClickState,
    WrapperComponentProps,
} from './interface';

export const withTrackClick = <T extends unknown>(
    WrapperComponent: React.FC<WrapperComponentProps & T>
) => {
    return class extends React.Component<
        withTrackClickProps & T,
        withTrackClickState
    > {
        constructor(props: withTrackClickProps & T) {
            super(props);

            this.state = {
                click: 0,
            };
        }

        handleClick = () => {
            this.setState({
                click: this.state.click + 1,
            });
        };

        render() {
            return (
                <div onClick={this.handleClick}>
                    <WrapperComponent
                        {...this.props}
                        click={this.state.click}
                    />
                </div>
            );
        }
    };
};
