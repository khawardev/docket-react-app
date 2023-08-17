
import { configureStore } from '@reduxjs/toolkit';
import {NotesSlice} from '../dataSlice/Dataslice';
import {FolderSlice} from '../dataSlice/Dataslice';
import { UpdateNotesSlice } from '../dataSlice/Dataslice';


const store = configureStore({
    reducer: {
        notesstore: NotesSlice,
        foldersstore: FolderSlice,
        updatestore: UpdateNotesSlice,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export default store;
