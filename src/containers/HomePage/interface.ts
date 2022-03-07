import { NoteDetails, Notes } from '../../store/reducer/NotesReducer';

export interface HomePageOwnProps {}

export interface HomePageStateProps {
    notes: Notes;
}

export interface HomePageDispatchProps {
    manageNote(note: NoteDetails): any;
    deleteNote(noteId: string): any;
}

export type HomePageProps = HomePageOwnProps &
    HomePageStateProps &
    HomePageDispatchProps;

export interface HomePageState {
    selectedNote: NoteDetails | null;
    currentAppNoteAction: AppNoteAction | null;
}

export type AppNoteAction =
    | 'Add Note'
    | 'Edit Note'
    | 'View Note'
    | 'Delete Note';
