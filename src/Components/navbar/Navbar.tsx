/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './navbar.scss';
import { useState, useRef, KeyboardEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaRegNoteSticky } from 'react-icons/fa6';
// import { BsSun } from 'react-icons/bs';
// import { IoPersonOutline } from 'react-icons/io5';
import { BiX } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/AppContext';
import { FaHeart } from 'react-icons/fa';

const Navbar: React.FC = () => {

    const Navigate = useNavigate();
    const context = useContext(Context)
    const { text, setText } = context || {};
    const [query, setQuery] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (text) {
            Navigate(`search-notes/${text}`)
        }
    }, [text])
    const searchQueryHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && query.length > 0) {
            
            if (!text && setText) {
                setText(event.currentTarget.value);
                setQuery('');
                inputRef.current?.blur();
                setSearchVisible(!searchVisible);
            }
        }
    };

    const [searchVisible, setSearchVisible] = useState(false);
    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };



    return (
        <>

            <section className="sm:w-10/12 w-11/12  m-auto flex items-center justify-between mt-5">
                <nav className=" w-1/3  flex items-center  text-purple-500 select-none" >
                    <div className='text-3xl hover:cursor-pointer' onClick={() => Navigate("/")}>
                        <FaRegNoteSticky />
                    </div>
                    <a className="text-3xl  font-extrabold hover:cursor-pointer " onClick={() => Navigate("/")}>Docket</a>
                </nav>

                <main className=" w-2/3 flex sm:justify-between justify-end items-center gap-2 ">
                    <div className='md:flex hidden items-center search-input-header-div'>
                        <div>

                            <input
                                type="text"
                                placeholder="Search Notes"
                                className="search-input px-3 font-medium  rounded-full"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                onKeyUp={searchQueryHandler}
                                ref={inputRef}
                            />
                        </div>
                        <div>
                            <FiSearch size={22} style={{ strokeWidth: '2', color: `black` }} />
                        </div>

                    </div>

                    <div className='md:hidden flex items-center search-input-header-div h-[2.86rem] '>
                        <div>
                            {searchVisible && (
                                <>
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="Search Notes"
                                        className="search-input px-3 font-medium  rounded-full"
                                        value={query}
                                        onChange={(event) => setQuery(event.target.value)}
                                        onKeyUp={searchQueryHandler}
                                        ref={inputRef}
                                    />
                                </>
                            )}

                        </div>
                        <div>
                            {searchVisible ? (
                                <BiX size={28} style={{ color: `black` }} onClick={handleSearchClick} />
                            ) : (
                                <div>
                                    <FiSearch size={22} style={{ strokeWidth: '2', color: `black` }} onClick={handleSearchClick} />
                                </div>

                            )}
                        </div>
                    </div>

                    <div className=" flex justify-center ">
                        <button className='flex   items-center justify-center p-4 rounded-full toggle-button' >
                            <span className='' style={{ color:'#A855F7'}}> <FaHeart /> </span>  
                        </button>
                    </div> 
                </main>
            </section>

        </>


    );
};

export default Navbar;
