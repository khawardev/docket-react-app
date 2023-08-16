/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewNotes {
    title: string;
    description: string;
}
interface NotesState {
    NewNotesArray: NewNotes[];
}
const initialNotesState: NotesState = {
    NewNotesArray: [],
};
const notesSlice = createSlice({
    name: 'notes',
    initialState: initialNotesState,
    reducers: {
        addNotes: (state, action: PayloadAction<NewNotes>) => {
            state.NewNotesArray.unshift(action.payload);
        },

    },
});
export const { addNotes } = notesSlice.actions;
export const NotesSlice = notesSlice.reducer;





interface NewFolder {
    newFolder: string
}
interface FolderState {
    NewFolderArray: NewFolder[];
}
const initialFolderState: FolderState = {
    NewFolderArray: [],
};
const folderSlice = createSlice({
    name: 'folders',
    initialState: initialFolderState,
    reducers: {
        addFolder: (state, action: PayloadAction<NewFolder>) => {
            state.NewFolderArray.unshift(action.payload);
        },
    },
});

export const { addFolder } = folderSlice.actions;
export const FolderSlice = folderSlice.reducer; 
