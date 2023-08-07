import './banner.scss';
import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiFolder } from 'react-icons/fi';
import { LuStickyNote } from 'react-icons/lu';
import { BiCheck, BiX } from 'react-icons/bi';
const Banner = () => {
    const [DeletemenuVisible, setDeletemenuVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [bgcolor, setBgcolor] = useState<string>('bg-purple-500');
    const [textcolor, setTextcolor] = useState<string>('text-black');

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
        if (menuVisible) {
            setBgcolor('bg-purple-500')
            setTextcolor('text-black')

        } else {
            setBgcolor('bg-purple-600')
            setTextcolor('text-white')

        }
    };
    const DeleteMenu = () => {
        { menuVisible && setMenuVisible(!menuVisible) } // DELETE BUTTON : If ADD menu open then it close it
        { menuVisible && setBgcolor('bg-purple-500'), setTextcolor('text-black') } // DELETE BUTTON : If Color of ADD button is visible the normal it
        setDeletemenuVisible(!DeletemenuVisible)
    };
    return (
        <>

            <section className=" w-11/12 m-auto flex items-center mt-7 ">
                <p className=" sm:text-5xl text-3xl font-extrabold">Notes</p>
            </section>
            <section className='w-11/12 m-auto mt-7 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 '>

                <main className=' bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                    {/* <div className='flex items-center justify-between'>
                        <button>star</button>
                    </div> */}
                    <div className='mb-4 sm:text-xl text-base font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div  className='mb-3 md:block hidden'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam? Non laborum earum ratione sint qui? Cupiditate, dicta recusandae. Facere!</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className=' text-sm text-slate-500'>March 12, 2023</p>
                    </div>
                </main>
                <main className=' bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                    {/* <div className='flex items-center justify-between'>
                        <button>star</button>
                    </div> */}
                    <div className='mb-4 sm:text-xl text-base font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div  className='mb-3 md:block hidden'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam? Non laborum earum ratione sint qui? Cupiditate, dicta recusandae. Facere!</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className=' text-sm text-slate-500'>March 12, 2023</p>
                    </div>
                </main>
                <main className=' bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                    {/* <div className='flex items-center justify-between'>
                        <button>star</button>
                    </div> */}
                    <div className='mb-4 sm:text-xl text-base font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div  className='mb-3 md:block hidden'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam? Non laborum earum ratione sint qui? Cupiditate, dicta recusandae. Facere!</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className=' text-sm text-slate-500'>March 12, 2023</p>
                    </div>
                </main>
                <main className=' bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                    {/* <div className='flex items-center justify-between'>
                        <button>star</button>
                    </div> */}
                    <div className='mb-4 sm:text-xl text-base font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div  className='mb-3 md:block hidden'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam? Non laborum earum ratione sint qui? Cupiditate, dicta recusandae. Facere!</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className=' text-sm text-slate-500'>March 12, 2023</p>
                    </div>
                </main>
                <main className=' bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                    {/* <div className='flex items-center justify-between'>
                        <button>star</button>
                    </div> */}
                    <div className='mb-4 sm:text-xl text-base font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div  className='mb-3 md:block hidden'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam? Non laborum earum ratione sint qui? Cupiditate, dicta recusandae. Facere!</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className=' text-sm text-slate-500'>March 12, 2023</p>
                    </div>
                </main>



            </section>



            <div className=' relative'>
                <div className='Bottom'>
                    {menuVisible && (
                        <ul className="menu-list" >
                            <li className='flex  items-center gap-3'>
                                <span ><FiFolder size={20} /></span>
                                <p className='mt-1'>Folder</p> </li>
                            <li className='flex  items-center gap-3'>
                                <span ><LuStickyNote size={20} /></span>
                                <p className='mt-1'>Notes</p> </li>
                        </ul>
                    )}
                    {DeletemenuVisible ? (
                        <>
                            <button className={`left-button`} onClick={DeleteMenu}><BiX size={22} /></button>
                            <button className={`bg-purple-500 right-button`} ><BiCheck size={22} /></button>
                        </>
                    ) :
                        <>

                            <button className={`left-button`} onClick={DeleteMenu}><AiOutlineDelete size={22} /></button>
                            <button className={`${bgcolor} ${textcolor} right-button`} onClick={toggleMenu}><RiAddFill size={22} /></button>
                        </>
                    }


                </div>

            </div>
        </>
    )
}

export default Banner