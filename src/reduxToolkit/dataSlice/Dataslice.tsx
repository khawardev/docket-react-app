/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface NewNotes {
    id: string | undefined;
    title: string | undefined;
    description: string | undefined;
}

interface NotesState {
    NewNotesArray: NewNotes[];
    filteredNotesArray: NewNotes[];
}

const initialNotesState: NotesState = {
    NewNotesArray: [],
    filteredNotesArray: [],
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
        },
        deleteNotes: (state, action: PayloadAction<string>) => {
            const noteIdToDelete = action.payload;
            const updatedNotesArray = state.NewNotesArray.filter(obj => obj.id !== noteIdToDelete);

            return {
                ...state ,
                NewNotesArray: updatedNotesArray,
            };
        },
        searchNotes: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase();
            const filteredNotesArray = state.NewNotesArray.filter(obj =>
                obj.title && obj.title.toLowerCase().includes(searchTerm)
            );
            if (filteredNotesArray.length === 0) {
                return {
                    ...state,
                    filteredNotesArray: [],
                };
            }
            return {
                ...state,
                filteredNotesArray,
            };
        },
        clearFilteredNotes: (state) => {
            return {
                ...state,
                filteredNotesArray: [],
            };
        },
    },
});
export const { addNotes, editNotes, deleteNotes, searchNotes, clearFilteredNotes } = notesSlice.actions;
export const NotesSlice = notesSlice.reducer;











interface NewNotesF {
    newnotesid: string | undefined;
    title?: string;
    description?: string;
}

interface NewFolder {
    Folderid: string;
    Foldertitle: string;
    id: number;
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
        deleteFolder: (state, action: PayloadAction<string>) => {
            const FolderIdToDelete = action.payload;
            const updatedFolderArray = state.NewFolderArray.filter(obj => obj.Folderid !== FolderIdToDelete);

            return {
                ...state,
                NewFolderArray: updatedFolderArray,
            };
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
        editNewNoteToFolder: (state, action: PayloadAction<{ folderid: string | undefined; newNote: NewNotesF }>) => {
            const { folderid, newNote } = action.payload;
            const folderIndex = state.NewFolderArray.findIndex(folder => folder.Folderid === folderid);
            if (folderIndex !== -1) {
                const selectedFolder = state.NewFolderArray[folderIndex];
                selectedFolder.newnotes = selectedFolder.newnotes.map(note => {
                    if (note.newnotesid === newNote.newnotesid) {
                        return { ...note, ...newNote };
                    }
                    return note;
                });
            }
        }
    },

});

export const { addFolder, deleteFolder, addNewNoteToFolder, editNewNoteToFolder } = folderSlice.actions;
export const FolderSlice = folderSlice.reducer;






interface notesIdsData {
    notesIds?: number;
}
interface notesIdsArray {
    notesIdsArray: notesIdsData[]
}
const initialNewNotesFState: notesIdsArray = {
    notesIdsArray: [],
};
const addNewNoteArraySlice = createSlice({
    name: 'foldersnewnotesArray',
    initialState: initialNewNotesFState,
    reducers: {
        addNewNoteArray: (state, action: PayloadAction<notesIdsData>) => {
            state.notesIdsArray.push(action.payload);
        },
       
    }
});

export const { addNewNoteArray } = addNewNoteArraySlice.actions;
export const AddNewNoteArraySlice = addNewNoteArraySlice.reducer;