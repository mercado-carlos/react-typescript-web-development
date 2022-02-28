import React from 'react';

import { FormElementsProps, FormElementsState } from './interface';

export class FormElements extends React.Component<
    FormElementsProps,
    FormElementsState
> {
    constructor(props: FormElementsProps) {
        super(props);

        this.state = {
            inputValue: 'test',
            textareaValue: 'textarea',
            selectValue: 'guava',
        };
    }

    handleChangeEvent = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { value, name } = event.currentTarget;

        this.setState({
            [name]: value,
        } as unknown as FormElementsState);
    };

    render() {
        const { inputValue, selectValue, textareaValue } = this.state;

        return (
            <form onSubmit={(e) => e?.preventDefault()}>
                Input: <input name="inputValue" defaultValue={inputValue} />
                <br />
                Textarea:
                <textarea name="textareaValue" defaultValue={textareaValue} />
                <br />
                Select:
                <select name="selectValue" defaultValue={selectValue}>
                    <option value="Mango">Mango</option>
                    <option selected value="Apple">
                        Apple
                    </option>
                    <option value="Guava">Guava</option>
                </select>
                <br />
                <button>Submit</button>
            </form>
        );
    }
}
