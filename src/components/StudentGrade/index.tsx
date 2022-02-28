import React from 'react';
import { Button } from '../Button';
import './style.css';
import {
    Fields,
    StudentGradeDetails,
    StudentGradeProps,
    StudentGradeState,
} from './interface';
import { Input } from '../Input';
import { Students90Percent } from '../Students90Percent';
import { StudentsBelow70 } from '../StudentsBelow70';
import { ERROR_MESSAGE, FIELDS_CONFIG } from './constant';

export const StudentGradeContext = React.createContext<StudentGradeDetails[]>(
    []
);

class StudentGrade extends React.Component<
    StudentGradeProps,
    StudentGradeState
> {
    inputGradeRef: React.RefObject<HTMLInputElement>;
    inputStudentNameRef: React.RefObject<HTMLInputElement>;

    constructor(props: StudentGradeProps) {
        super(props);

        this.state = {
            studentsGrade: [
                {
                    name: 'Rysher Magbanua',
                    grade: 95.5,
                },
                {
                    name: 'May Villareal',
                    grade: 97.5,
                },
                {
                    name: 'Pisipini',
                    grade: 65,
                },
                {
                    name: 'Prince',
                    grade: 55,
                },
            ],
            inputGrade: '',
            inputStudentName: '',
            fieldWithError: '',
        };

        this.inputGradeRef = React.createRef();
        this.inputStudentNameRef = React.createRef();
    }

    handleInputOnChange =
        (stateKey: Fields) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.currentTarget;
            const { fieldWithError } = this.state;

            this.setState({
                [stateKey]: value,
            } as Omit<StudentGradeState, 'studentsGrade' | 'fieldWithError'>);

            if (fieldWithError === stateKey && value.length)
                this.setState({ fieldWithError: '' });
        };

    areInputsValid = () => {
        const { inputGrade, inputStudentName } = this.state;
        let hasError = false;

        if (!inputStudentName) {
            this.inputStudentNameRef.current &&
                this.inputStudentNameRef.current.focus();
            hasError = true;
            this.setState({
                fieldWithError: 'inputStudentName',
            });
        } else if (!inputGrade) {
            this.inputGradeRef.current && this.inputGradeRef.current.focus();
            hasError = true;
            this.setState({
                fieldWithError: 'inputGrade',
            });
        }

        return inputGrade && inputStudentName;
    };

    handleButtonClick = () => {
        const { studentsGrade, inputGrade, inputStudentName } = this.state;

        if (this.areInputsValid()) {
            this.setState({
                studentsGrade: [
                    ...studentsGrade,
                    {
                        grade: parseFloat(inputGrade),
                        name: inputStudentName,
                    },
                ],
                inputStudentName: '',
                inputGrade: '',
            });
        }
    };

    renderStudentsGrade = () => {
        const { studentsGrade } = this.state;

        return studentsGrade.map(({ name, grade }) => {
            return (
                <li>
                    {name} - {grade}
                </li>
            );
        });
    };

    getErrorMessage = (field: Fields) => {
        const { fieldWithError } = this.state;

        return fieldWithError === field ? ERROR_MESSAGE : '';
    };

    render() {
        const { inputStudentName, inputGrade, studentsGrade } = this.state;
        const { INPUT_GRADE, INPUT_STUDENT_NAME } = FIELDS_CONFIG;

        return (
            <StudentGradeContext.Provider value={studentsGrade}>
                <div className="students-grade-container">
                    <h1>Students Grade</h1>
                    <ul>{this.renderStudentsGrade()}</ul>
                    <Input
                        ref={this.inputStudentNameRef}
                        onChange={this.handleInputOnChange(
                            INPUT_STUDENT_NAME.name
                        )}
                        value={inputStudentName}
                        label={INPUT_STUDENT_NAME.label}
                        error={this.getErrorMessage(INPUT_STUDENT_NAME.name)}
                    />
                    <Input
                        ref={this.inputGradeRef}
                        onChange={this.handleInputOnChange(INPUT_GRADE.name)}
                        value={inputGrade}
                        label={INPUT_GRADE.label}
                        error={this.getErrorMessage(INPUT_GRADE.name)}
                    />
                    <br />
                    <Button
                        className="student-grade-button"
                        type="primary"
                        onClick={this.handleButtonClick}
                    >
                        Add
                    </Button>
                    <Students90Percent />
                    <StudentsBelow70 />
                </div>
            </StudentGradeContext.Provider>
        );
    }
}

export default StudentGrade;
