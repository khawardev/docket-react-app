/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import React, { createContext, useState, ReactNode } from "react";

type ContextType =  {
    newfoldertext: string;
    setNewFolderText: React.Dispatch<React.SetStateAction<string>>;
}
interface AppContextProps  {
    children: ReactNode;
}

export const Context = createContext<ContextType | null>(null);
const AppContext = ({ children }: AppContextProps) => {
    const [newfoldertext,setNewFolderText ] = useState<string>('');   


    return (
        <Context.Provider
            value={{
                newfoldertext, setNewFolderText
            }}>
            {children}
        </Context.Provider>
    );
};

export default AppContext;


