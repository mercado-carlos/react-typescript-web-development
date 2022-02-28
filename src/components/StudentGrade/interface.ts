export interface StudentGradeDetails {
    name: string;
    grade: number;
}

export interface StudentGradeProps {}

export type StudentGradeState = {
    [key in Fields]: string;
} & {
    studentsGrade: StudentGradeDetails[];
    fieldWithError: Fields | '';
};

export type Fields = 'inputGrade' | 'inputStudentName';

export interface FieldConfig {
    [field: string]: {
        name: Fields;
        label: string;
    };
}
