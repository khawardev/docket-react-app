import FolderInterface from '../homeInterface/folderInterface/FolderInterface';
import NotesInterface from '../homeInterface/notesInterface/NotesInterface';
import FloatButton from '../homeInterface/floatButton/FloatButton';
import React from 'react';

const Home: React.FC = () => {

   


    const a = 0;
    return (
        <>
            <FolderInterface />
            <NotesInterface filteredNotesArray={[]} />
            <FloatButton foldernewnotes={false} folderid={a.toString()} />

        </>
    )
}

export default Home