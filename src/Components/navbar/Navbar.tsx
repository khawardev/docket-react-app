/* eslint-disable @typescript-eslint/no-unused-vars */

import './navbar.scss';
import { useState, useRef, KeyboardEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaRegNoteSticky, FaMoon } from 'react-icons/fa6';
import { BsSun } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { BiX } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

    const Navigate = useNavigate();

    const inputRef = useRef<HTMLInputElement | null>(null);                  // REF Hook: Disapear cursor after Enter 
    const [text, setText] = useState<string>('');                            // useState Hook: Storing Text after Enter 
    const [query, setQuery] = useState<string>('');                          // useState Hook: Storing Text Length
    const [isMoonIconVisible, setIsMoonIconVisible] = useState(true);        // useState Hook: Set dark and Light mode
    console.log(text)

    const searchQueryHandler = (event: KeyboardEvent<HTMLInputElement>) =>   // FUNCTION: Query Handler
    {
        if (event.key === 'Enter' && query.length > 0) {
            setText(event.currentTarget.value);
            setQuery('');
            inputRef.current?.blur();
        }
    };

    const [searchVisible, setSearchVisible] = useState(false);                // FUNCTION: Show Search Field at click in mobile screen
    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };


    // const { theme, setTheme } = useContext(Context);
    // const { baseColor, setbaseColor } = useContext(Context);
    // const { highlightColor, sethighlightColor } = useContext(Context);



    function togglemode() {
        setIsMoonIconVisible((prevIsMoonIconVisible) => !prevIsMoonIconVisible);
        //     console.log("toggleIcon");
        //     setTheme(theme === "Dark_mode" ? "Light_mode" : "Dark_mode");
        //     setLogocolor(logocolor === '#ffffff' ? '#000000' : '#ffffff')
        //     setbaseColor(baseColor === '#202020' ? 'rgb(200, 200, 200)' : '#202020')
        //     sethighlightColor(highlightColor === '#444' ? 'rgb(225, 225, 225)' : '#444')
    }

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

                                <FiSearch size={22} style={{ strokeWidth: '2', color: `black` }} onClick={handleSearchClick} />

                            )}
                        </div>
                    </div>
                    <div className="gap-2 flex ">
                        <button className='flex  items-center justify-center p-3 rounded-full toggle-button' onClick={togglemode} >
                            {isMoonIconVisible ? (
                                <BsSun size={22} />

                            ) : (
                                <FaMoon size={22} />
                            )}
                        </button>
                        <div>
                            <button className='flex  items-center justify-center p-3 rounded-full toggle-button'><IoPersonOutline size={22} /></button>
                        </div>
                    </div>
                </main>
            </section>

        </>


    );
};

export default Navbar;
