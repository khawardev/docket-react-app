import React, { createContext, useState } from "react";
interface NotesData {
    title: string;
    description: string;
}

interface ContextType {
    newFolderText: string;
    setNewFolderText: React.Dispatch<React.SetStateAction<string>>;
    NotesOjectdata: NotesData;
    setNotesOjectData: React.Dispatch<React.SetStateAction<NotesData>>;
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
    const contextValue: ContextType = {
        newFolderText,
        setNewFolderText,
        NotesOjectdata,
        setNotesOjectData,
    };
    return (
        <Context.Provider
            value={contextValue} >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
