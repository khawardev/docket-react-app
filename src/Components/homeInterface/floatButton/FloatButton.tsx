/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, KeyboardEvent } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiFolder } from 'react-icons/fi';
import { LuStickyNote } from 'react-icons/lu';
import { BiCheck, BiX } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../../context/AppContext';
import React, { useEffect } from 'react';
const FloatButton = () => {


    const contextValue = useContext(Context);
    let [newfoldertext, setNewFolderText] = useState<string>(''); // Set a default value
    if (contextValue) {
        const { newfoldertext: contextfolderText, setNewFolderText: contextsetfolderText } = contextValue;
        newfoldertext = contextfolderText;
        setNewFolderText = contextsetfolderText;
    }



    const [ispopup, setIspopup] = useState(false);

    const [DeletemenuVisible, setDeletemenuVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [bgcolor, setBgcolor] = useState<string>('bg-purple-400');
    const [textcolor, setTextcolor] = useState<string>('text-black');
    const Navigate = useNavigate();

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


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    // useState Hook: Storing Text after Enter 
    const [query, setQuery] = useState<string>('');
    const searchQueryHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && query.length > 0 && query.length <= 13) {
            setNewFolderText(event.currentTarget.value);
            setQuery('');
            handleModal()
        } else {
            setIspopup(true)
        }
    };
    const QueryHandler = () => {


        if (query.length > 0 && query.length <= 13) {
            setNewFolderText(query);
            setQuery('');
            handleModal();
        } else {
            setIspopup(true)
        }
    };



    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (ispopup) {
            timeout = setTimeout(() => {
                setIspopup(false);
            }, 1000);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [ispopup]);





    return (
        <div>



            <div className=' relative'>
                <div className='Float-Button'>
                    {menuVisible && (
                        <ul className="menu-list" >
                            <li onClick={() => { toggleMenu(); handleModal(); }} className='flex items-center gap-3'>
                                <span><FiFolder size={20} /></span>
                                <p className='mt-1 '>Folder</p>
                            </li>
                            <li className='flex items-center gap-3' onClick={() => Navigate("new-notes")}>
                                <span ><LuStickyNote size={20} /></span>
                                <p className='mt-1 '>Notes</p>
                            </li>
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


            {isModalOpen && (
                <>

                    {ispopup && (
                        <div className={`animated-text ${ispopup ? ' visible' : ''}`}>
                            <p className='px-3 bg-slate-200  rounded-full text-center text-slate-500'>Add Folder Name</p>
                        </div>
                    )}
                    <div className={`  fixed inset-0 bg-black/50 ${isModalOpen ? 'fadeIn' : 'fadeOut'}`} >
                        <div className="flex items-center justify-center h-2/3">
                            <div className="bg-purple-400 p-6 rounded-2xl shadow-lg sm:w-1/3 w-11/12 transition-opacity ease-in-out duration-1000">

                                <h2 className="text-xl font-semibold mb-4 text-slate-100">Enter name of folder</h2>
                                <input
                                    type="text"
                                    className='text-lg w-full search-input-header mb-6'
                                    autoFocus
                                    onChange={(event) => setQuery(event.target.value)}
                                    onKeyUp={searchQueryHandler}

                                />
                                <div className="flex justify-end gap-2 items-center">
                                    <button className=' px-5 py-2 rounded-full  bg-purple-600  text-white hover:bg-purple-500' onClick={handleModal}>
                                        close
                                    </button>
                                    <button onClick={QueryHandler} className='  py-2 px-10  rounded-full bg-purple-500 text-white hover:bg-purple-600'>
                                        save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )}







        </div>
    )
}

export default FloatButton