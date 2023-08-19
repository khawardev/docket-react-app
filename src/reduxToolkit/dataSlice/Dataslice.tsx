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











interface NewNotesF {
    newnotesid: string | undefined;
    title: string;
    description: string;
}

interface NewFolder {
    Folderid: string | undefined
    Foldertitle: string
    newnotes: NewNotesF[]; 
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
            state.NewFolderArray.push(action.payload);
        },
        addNewNoteToFolder: (state, action: PayloadAction<{ folderid: string | undefined; newNote: NewNotesF }>) => {
            const { folderid, newNote } = action.payload;
            const folderIndex = state.NewFolderArray.findIndex(folder => folder.Folderid === folderid);
            if (folderIndex !== -1) {
                if (!state.NewFolderArray[folderIndex].newnotes) {
                    state.NewFolderArray[folderIndex].newnotes = [];
                }
                state.NewFolderArray[folderIndex].newnotes.unshift(newNote);
            }
        },
    },
  
});

export const { addFolder, addNewNoteToFolder } = folderSlice.actions;
export const FolderSlice = folderSlice.reducer;



interface NewNotesFolder {
    newnotesid: string | undefined;
    title: string;
    description: string;
}

interface NewNotesFState {
    NewNotesFArray: NewNotesFolder[];
}
const initialNewNotesFState: NewNotesFState = {
    NewNotesFArray: [],
};
const newnotesFArraySlice = createSlice({
    name: 'foldersnewnotesArray',
    initialState: initialNewNotesFState,
    reducers: {
        addNewNoteArray: (state, action: PayloadAction<NewNotesFolder>) => {
            state.NewNotesFArray.push(action.payload);
        },
    }
});

export const { addNewNoteArray } = newnotesFArraySlice.actions;
export const NewnotesFArraySlice = newnotesFArraySlice.reducer;