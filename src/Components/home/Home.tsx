import FolderInterface from '../homeInterface/folderInterface/FolderInterface';
import NotesInterface from '../homeInterface/notesInterface/NotesInterface';
import { useContext } from 'react';
import { Context } from '../../context/AppContext';
import FloatButton from '../homeInterface/floatButton/FloatButton';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addData } from '../../reduxToolkit/dataSlice/Dataslice';
const Home: React.FC = () => {
    const context = useContext(Context)
    if (!context) {
        return 'null';
    }
    const { newFolderText } = context;
    // const dispatch = useDispatch();
    // dispatch(addData(newItem));

    return (
        <>
            <FolderInterface newFolderText={newFolderText} />
            <NotesInterface />
            <FloatButton />

        </>
    )
}

export default Home