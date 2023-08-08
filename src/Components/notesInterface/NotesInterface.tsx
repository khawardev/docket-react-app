import './notesInterface.scss';
import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiFolder } from 'react-icons/fi';
import { LuStickyNote } from 'react-icons/lu';
import { BiCheck, BiX } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import {
    Modal,
    Ripple,
    initTE,
} from "tw-elements";

initTE({ Modal, Ripple });

const Banner = () => {
    const [DeletemenuVisible, setDeletemenuVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [bgcolor, setBgcolor] = useState<string>('bg-purple-400');
    const [textcolor, setTextcolor] = useState<string>('text-black');
    const Navigate = useNavigate();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
        if (menuVisible) {
            setBgcolor('bg-purple-400')
            setTextcolor('text-black')

        } else {
            setBgcolor('bg-purple-500')
            setTextcolor('text-white')

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



    return (
        <div className=' select-none'>

            <section className=" w-11/12 m-auto flex items-center mt-7 ">
                <p className=" sm:text-5xl text-3xl font-extrabold ">Notes</p>
            </section>
            <section className='w-11/12 m-auto mt-7 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-2 '>

                <main className=' bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                  
                    <div className='sm:text-xl text-base font-semibold text-slate-700 limited-heading-lines ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum dolor obcaecati laborum enim unde ad pariatur quas ex ducimus! Sit quo illum nihil excepturi illo deleniti! Voluptatem, labore.
                    </div>
                    <div className='my-3 text-slate-600  paragraph-heading-lines'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam Non laborum earum ratione sint qui C Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam Non laborum earum ratione sint qui Cupiditate, dicta recusandae.
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className=' text-sm text-slate-500 '>March 12, 2023</p>
                    </div>
                </main>

                <main className=' bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                    <div className='flex items-center text-center justify-between '>
                        <p className=' bg-purple-400 rounded-full px-3 text-white '>Personal Notes</p>
                        <p className=' text-lg milestone-num font-bold'>3</p>
                    </div>
                    <div className='my-7  text-slate-600  text-8xl justify-center flex' >
                        <span ><FiFolder /></span>
                    </div>
                    <div className='flex items-center '>
                        <p className=' text-sm text-slate-500 '>March 12, 2023</p>
                    </div>
                </main>

            </section>


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
                            <button className={`left-button `} onClick={DeleteMenu}><BiX size={22} /></button>
                            <button className={`right-button`} ><BiCheck size={22} /></button>
                        </>
                    ) :
                        <>
                            <button className={`left-button`} onClick={DeleteMenu}><AiOutlineDelete size={22} /></button>
                            <button className={`${bgcolor} ${textcolor} right-button`} onClick={toggleMenu}><RiAddFill size={22} /></button>
                        </>
                    }
                </div>
            </div>


            {isModalOpen && (
                <div className={`fixed inset-0 bg-black/50 ${isModalOpen ? 'fadeIn' : 'fadeOut'}`} >
                    <div className="flex items-center justify-center h-2/3">
                        <div className="bg-purple-400 p-6 rounded-2xl shadow-lg sm:w-1/3 w-11/12 transition-opacity ease-in-out duration-1000">

                            <h2 className="text-xl font-semibold mb-4 text-slate-100">Enter name of folder</h2>
                            <input type="text" className='text-xl w-full search-input-header mb-6' autoFocus />
                            <div className="flex justify-end gap-2 items-center">
                                <button className=' px-5 py-2 rounded-full  bg-purple-600  text-white hover:bg-purple-500' onClick={handleModal}>
                              close
                                </button>
                                <button className='  py-2 px-10  rounded-full bg-purple-500 text-white hover:bg-purple-600'>
                        save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Banner