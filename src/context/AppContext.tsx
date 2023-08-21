import React, { createContext, useState } from "react";
interface NotesData {
    title: string;
    description: string;
}
interface NoteArraydata {
    newnotesid: number;
    title: string;
    description: string;
}
interface ContextType {
    newFolderText: string; setNewFolderText: React.Dispatch<React.SetStateAction<string>>;
    NotesOjectdata: NotesData; setNotesOjectData: React.Dispatch<React.SetStateAction<NotesData>>;
    notes: NoteArraydata[]; setNotes: React.Dispatch<React.SetStateAction<NoteArraydata[]>>;
    DeletecheckMark: boolean, setDeletecheckMark: React.Dispatch<React.SetStateAction<boolean>>;
    deletenotesid: number | undefined, setdeletenotesid: React.Dispatch<React.SetStateAction<number | undefined>>;
    text: string, setText: React.Dispatch<React.SetStateAction<string>>;
}

interface AppContextProps {
    children: React.ReactNode;
}



export const Context = createContext<ContextType | null>(null);

const AppContext = ({ children }: AppContextProps) => {
    const [newFolderText, setNewFolderText] = useState<string>('');
    const [NotesOjectdata, setNotesOjectData] = useState<NotesData>({
        title: '',
        description: '',
    });
    const [notes, setNotes] = useState<NoteArraydata[]>([]);
    const [DeletecheckMark, setDeletecheckMark] = useState<boolean>(false);
    const [deletenotesid, setdeletenotesid] = useState<number|undefined>();
    const [text, setText] = useState('');











    const contextValue: ContextType = {
        newFolderText,
        setNewFolderText,
        NotesOjectdata,
        setNotesOjectData,
        notes,
        setNotes,
        DeletecheckMark, setDeletecheckMark,
        deletenotesid, setdeletenotesid,
        text, setText
    };
    return (
        <Context.Provider
            value={contextValue} >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
