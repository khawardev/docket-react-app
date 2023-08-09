import { FiFolder } from 'react-icons/fi';


const NewFolder = () => {
    return (
        <>


            <div className=' select-none'>
                <section className=" w-11/12 m-auto flex items-center mt-7 ">
                    <p className=" sm:text-4xl text-3xl font-extrabold ">Folders</p>
                </section>
                <section className='w-11/12 m-auto mt-7 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 '>
                    <main className=' bg-slate-100 sm:p-5 p-4 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                        <div className=' flex items-center  justify-between  '>
                            <p className=' bg-purple-400 rounded-full sm:px-3 px-2 text-white sm:text-base text-sm'>Personal Notes</p>
                            <p className=' text-lg milestone-num font-bold'>3</p>
                        </div>
                        <div className='my-7  text-slate-600  sm:text-8xl text-6xl justify-center flex' >
                            <span ><FiFolder /></span>
                        </div>
                        <div className='flex items-center sm:justify-start justify-center '>
                            <p className=' text-sm text-slate-500 '>March 12, 2023</p>
                        </div>
                    </main>
                    <main className=' bg-slate-100 sm:p-5 p-4 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                        <div className=' flex items-center  justify-between  '>
                            <p className=' bg-purple-400 rounded-full sm:px-3 px-2 text-white sm:text-base text-sm'>Personal Notes</p>
                            <p className=' text-lg milestone-num font-bold'>3</p>
                        </div>
                        <div className='my-7  text-slate-600  sm:text-8xl text-6xl justify-center flex' >
                            <span ><FiFolder /></span>
                        </div>
                        <div className='flex items-center sm:justify-start justify-center '>
                            <p className=' text-sm text-slate-500 '>March 12, 2023</p>
                        </div>
                    </main>
                    <main className=' bg-slate-100 sm:p-5 p-4 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                        <div className=' flex items-center  justify-between  '>
                            <p className=' bg-purple-400 rounded-full sm:px-3 px-2 text-white sm:text-base text-sm'>Personal Notes</p>
                            <p className=' text-lg milestone-num font-bold'>3</p>
                        </div>
                        <div className='my-7  text-slate-600  sm:text-8xl text-6xl justify-center flex' >
                            <span ><FiFolder /></span>
                        </div>
                        <div className='flex items-center sm:justify-start justify-center '>
                            <p className=' text-sm text-slate-500 '>March 12, 2023</p>
                        </div>
                    </main>
                    <main className=' bg-slate-100 sm:p-5 p-4 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                        <div className=' flex items-center  justify-between  '>
                            <p className=' bg-purple-400 rounded-full sm:px-3 px-2 text-white sm:text-base text-sm'>Personal Notes</p>
                            <p className=' text-lg milestone-num font-bold'>3</p>
                        </div>
                        <div className='my-7  text-slate-600  sm:text-8xl text-6xl justify-center flex' >
                            <span ><FiFolder /></span>
                        </div>
                        <div className='flex items-center sm:justify-start justify-center '>
                            <p className=' text-sm text-slate-500 '>March 12, 2023</p>
                        </div>
                    </main>




                </section>
            </div>


        </>
    )
}

export default NewFolder