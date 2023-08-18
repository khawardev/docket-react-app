/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface NewNotes {
    id: string | undefined;
    title: string | undefined;
    description: string | undefined;
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
        editNotes: (state, action: PayloadAction<NewNotes>) => {
            const { id, title, description } = action.payload;
            const updatedNotesArray = state.NewNotesArray.map(obj => {
                if (obj.id === id) {
                    return { ...obj, title, description };
                }
                return obj;
            });

            return {
                ...state,
                NewNotesArray: updatedNotesArray,
            };
        }

    },
});
export const { addNotes, editNotes } = notesSlice.actions;
export const NotesSlice = notesSlice.reducer;





interface NewFolder {
    Foldertitle: string
    Folderid: string | undefined
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




interface UpdateNotes {
    id: string | undefined;
    title: string | undefined;
    description: string | undefined;
}
interface UpdateNotesState {
    UpdateNotesArray: UpdateNotes[];
}
const initialUpdateNotesState: UpdateNotesState = {
    UpdateNotesArray: [],
};
const updateNotesSlice = createSlice({
    name: 'folders',
    initialState: initialUpdateNotesState,
    reducers: {
        UpdateNotes: (state, action: PayloadAction<UpdateNotes>) => {
            state.UpdateNotesArray.unshift(action.payload);
        },
    },
});

export const { UpdateNotes } = updateNotesSlice.actions;
export const UpdateNotesSlice = updateNotesSlice.reducer; 