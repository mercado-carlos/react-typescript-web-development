import { combineReducers } from 'redux';
import { notesReducer } from './reducer/NotesReducer';

export const rootReducer = combineReducers({
    notes: notesReducer,
});

export type StoreStateType = ReturnType<typeof rootReducer>;
