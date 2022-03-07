import { NoteDetails } from '../reducer/NotesReducer';

export type NotesReducerAction = ManageNoteAction | DeleteNoteAction;

export interface ManageNoteAction {
    type: typeof NotesAction.MANAGE_NOTE;
    note: NoteDetails;
}

export interface DeleteNoteAction {
    type: typeof NotesAction.DELETE_NOTE;
    noteId: string;
}

export class NotesAction {
    static readonly MANAGE_NOTE = 'MANAGE_NOTE';
    static readonly DELETE_NOTE = 'DELETE_NOTE';

    manageNote = (note: NoteDetails): ManageNoteAction => {
        return {
            type: NotesAction.MANAGE_NOTE,
            note,
        };
    };

    deleteNote = (noteId: string): DeleteNoteAction => {
        return {
            noteId,
            type: NotesAction.DELETE_NOTE,
        };
    };
}
