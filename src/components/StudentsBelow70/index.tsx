import React from 'react';
import { StudentGradeContext } from '../StudentGrade';

export const StudentsBelow70: React.FC = () => {
    return (
        <>
            <h1>Students With 70% and Below</h1>
            <StudentGradeContext.Consumer>
                {(data) =>
                    data
                        .filter((studentDetails) => studentDetails.grade <= 70)
                        .map(({ name, grade }) => (
                            <li>
                                {name} - {grade}
                            </li>
                        ))
                }
            </StudentGradeContext.Consumer>
        </>
    );
};
