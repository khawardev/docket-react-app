/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import React, { createContext, useState, ReactNode } from "react";

type ContextType =  {
    folderText: string;
    setFolderText: React.Dispatch<React.SetStateAction<string>>;
    NotesText: string;
    setNotesText: React.Dispatch<React.SetStateAction<string>>;
}
interface AppContextProps  {
    children: ReactNode;
}

export const Context = createContext<ContextType | null>(null);
const AppContext = ({ children }: AppContextProps) => {
    const [folderText, setFolderText] = useState<string>('heheh');
    const [NotesText, setNotesText] = useState<string>('a');

    return (
        <Context.Provider
            value={{
                folderText, setFolderText,
                NotesText, setNotesText
            }}>
            {children}
        </Context.Provider>
    );
};

export default AppContext;


