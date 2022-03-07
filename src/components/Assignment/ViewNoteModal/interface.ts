import { AppNoteAction } from '../../../containers/HomePage/interface';
import { NoteDetails } from '../../../store/reducer/NotesReducer';

export interface ViewNoteModalProps {
    note: NoteDetails;
    onClickOutsideModalBody(): void;
    onEditNote(): void;
}
