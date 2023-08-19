/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiFolder } from 'react-icons/fi';
import { LuStickyNote } from 'react-icons/lu';
import { BiCheck, BiX } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { RootState } from '../../../../reduxToolkit/store/store';
import { useSelector } from 'react-redux';

interface MenuProps {
    handleModal: () => void;
    foldernewnotes: boolean;
    folderid: string|number;
}

const MenuComponent: React.FC<MenuProps> = ({ handleModal, foldernewnotes, folderid }) => {
   
    const FolderNotesLength = useSelector((state: RootState) => state.foldersstore.NewFolderArray[+folderid]?.newnotes?.length);
    const NotesLength = useSelector((state: RootState) => state.notesstore.NewNotesArray.length);

    const Navigate = useNavigate();
    const [DeletemenuVisible, setDeletemenuVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [bgcolor, setBgcolor] = useState<string>('bg-purple-400');
    const [textcolor, setTextcolor] = useState<string>('text-black');



  

    

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
        if (!menuVisible) {
            setBgcolor('bg-purple-500')
            setTextcolor('text-white')
        } else {
            setBgcolor('bg-purple-400')
            setTextcolor('text-black')
        }
    };
    const DeleteMenu = () => {
        { menuVisible && setMenuVisible(!menuVisible) } // DELETE BUTTON : If ADD menu open then it close it
        { menuVisible && setBgcolor('bg-purple-400'), setTextcolor('text-black') } // DELETE BUTTON : If Color of ADD button is visible the normal it
        setDeletemenuVisible(!DeletemenuVisible)
    };

    return (
        <div className=' relative'>
            <div className='Float-Button'>
                {menuVisible && (
                    <ul className="menu-list" >
                        {foldernewnotes ? (
                            <li className='flex items-center gap-3' onClick={() => Navigate(`/read-folder/${folderid}/new-notes/${FolderNotesLength == undefined ? 0 : FolderNotesLength}`)}>
                                <span ><LuStickyNote size={20} /></span>
                                <p className='mt-1 '>Notes</p>
                            </li>
                        ) : (
                            <>
                                <li onClick={() => { toggleMenu(); handleModal(); }} className='flex items-center gap-3'>
                                    <span><FiFolder size={20} /></span>
                                    <p className='mt-1 '>Folder</p>
                                </li>
                                <li className='flex items-center gap-3' onClick={() => Navigate(`new-notes/${NotesLength}`)}>
                                    <span ><LuStickyNote size={20} /></span>
                                    <p className='mt-1 '>Notes</p>
                                </li>
                            </>
                        )}

                    </ul>
                )}
                {DeletemenuVisible ? (
                    <>
                        <button className={`left-button bg-purple-400`} onClick={DeleteMenu}><BiX size={22} /></button>
                        <button className={`right-button bg-purple-400 `} ><BiCheck size={22} /></button>
                    </>
                ) :
                    <>
                        <button className={`left-button bg-purple-400`} onClick={DeleteMenu}><AiOutlineDelete size={22} /></button>
                        <button className={`${bgcolor} ${textcolor} right-button`} onClick={toggleMenu}><RiAddFill size={22} /></button>
                    </>
                }
            </div>
        </div>
    );
};

export default MenuComponent;
