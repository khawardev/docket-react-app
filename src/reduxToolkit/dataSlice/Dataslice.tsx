import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewNotes {
    title: string;
    description: string;
}

interface DataState {
    NotesArray: NewNotes[];
}

const initialState: DataState = {
    NotesArray: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<NewNotes>) => {
            state.NotesArray.unshift(action.payload);
        },
    },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;