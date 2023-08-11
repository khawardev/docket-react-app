import FolderInterface from '../homeInterface/folderInterface/FolderInterface';
import NotesInterface from '../homeInterface/notesInterface/NotesInterface';
import { useContext ,useState} from 'react';
import { Context } from '../../context/AppContext';
import FloatButton from '../homeInterface/floatButton/FloatButton';
import React from 'react';

const Home = () => {

    const contextValue = useContext(Context);
    let [newfoldertext] = useState<string>(''); 
    if (contextValue) {
      const { newfoldertext: contextfolderText} = contextValue;
      newfoldertext = contextfolderText;
     
    }

    return (
        <>
            <FolderInterface newfoldertext={newfoldertext}/>
            <NotesInterface />
            <FloatButton />

        </>
    )
}

export default Home