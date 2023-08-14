/* eslint-disable @typescript-eslint/no-unused-vars */

import { FiFolder } from 'react-icons/fi';
import React from 'react';
import { useState, useEffect } from 'react';
type folderprops = {
    newFolderText: string;
}
const DateCapture = () => {
    const currentDate = new Date();
    const date: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = currentDate.toLocaleDateString(undefined, date);
    const [month, day, year] = formattedDate.split(' ');
    const formattedResult = ` ${day} ${month}, ${year}`;
    return formattedResult;
};


const NewFolder: React.FC<folderprops> = (props: folderprops) => {

    const data = props?.newFolderText;
    const [folderData, setFolderData] = useState<string[]>([]);
    useEffect(() => {
        if (data.trim() !== '' && data.length <= 13) {
            setFolderData((prevArray) => [...prevArray, data]);
        }
    }, [data]);



    return (
        <>
            {folderData.length !== 0 &&
                <div className=' select-none'>
                    <section className=" w-11/12 m-auto flex items-center mt-7">
                        <p className=" sm:text-4xl text-3xl font-extrabold ">Folders</p>
                    </section>


                    <section className='w-11/12 m-auto mt-7 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 '>
                        {folderData.map((string, index) => (
                            <main key={index} className=' bg-slate-100 sm:p-5 p-4 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                                <div className=' flex items-center  justify-between  '>
                                    <p className=' bg-purple-400 rounded-full sm:px-3 px-2 text-white sm:text-base text-sm'>{string}</p>
                                    <p className=' text-lg milestone-num font-bold'>0</p>
                                </div>
                                <div className='my-7  text-slate-600  sm:text-8xl text-6xl justify-center flex' >
                                    <span ><FiFolder /></span>
                                </div>
                                <div className='flex items-center sm:justify-start justify-center '>
                                    <p className=' text-sm text-slate-500 '>{DateCapture()}</p>
                                </div>
                            </main>
                        ))}
                    </section>
                </div>
            }

        </>
    )
}

export default NewFolder