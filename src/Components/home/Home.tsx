import FolderInterface from '../homeInterface/folderInterface/FolderInterface';
import NotesInterface from '../homeInterface/notesInterface/NotesInterface';
import { useContext } from 'react';
import { Context } from '../../context/AppContext';
import FloatButton from '../homeInterface/floatButton/FloatButton';
import React from 'react';

const Home: React.FC = () => {
    const context = useContext(Context)
    if (!context) {
        return 'null';
    }
    const { newFolderText } = context;



    return (
        <>
            <FolderInterface newFolderText={newFolderText} />
            <NotesInterface />
            <FloatButton />

        </>
    )
}

export default Home