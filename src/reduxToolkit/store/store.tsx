// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../dataSlice/Dataslice';

const store = configureStore({
    reducer: {
        NewNotes: dataReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
