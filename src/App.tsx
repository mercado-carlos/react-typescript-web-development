import React from 'react';
import './App.css';

import SuperComponent from './components/SuperComponent';
import { Input } from './components/Input';

class App extends React.Component {
    inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: {}) {
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.inputRef.current);
        this.inputRef.current && this.inputRef.current.focus();
    }

    render() {
        return (
            <React.Fragment>
                <h1>My App</h1>
                <SuperComponent />
                <Input ref={this.inputRef} />
            </React.Fragment>
        );
    }
}

export default App;
