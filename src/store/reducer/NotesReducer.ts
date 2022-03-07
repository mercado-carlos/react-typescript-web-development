import { Reducer } from 'redux';
import { NotesAction, NotesReducerAction } from '../action/NotesAction';
import update from 'immutability-helper';

export interface NoteDetails {
    id: string;
    title: string;
    content: string;
    createdDate: string;
    modifiedDate: string;
}

export type Notes = NoteDetails[];

const notesInitialState: Notes = [];

export const notesReducer: Reducer<Notes, NotesReducerAction> = (
    state = notesInitialState,
    action
) => {
    switch (action.type) {
        case NotesAction.MANAGE_NOTE:
            const currentNoteIndex = state.findIndex(
                (note) => note.id === action.note.id
            );
            let newState: Notes;

            if (currentNoteIndex === -1) {
                newState = update(state, { $push: [action.note] });
            } else {
                newState = update(state, {
                    $splice: [[currentNoteIndex, 1, action.note]],
                });
            }

            return newState;
        case NotesAction.DELETE_NOTE:
            const deleteNoteIndex = state.findIndex(
                (note) => note.id === action.noteId
            );

            return update(state, { $splice: [[deleteNoteIndex, 1]] });
        default:
            return state;
    }
};
