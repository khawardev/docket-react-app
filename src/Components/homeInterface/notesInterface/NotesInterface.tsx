/* eslint-disable react-hooks/exhaustive-deps */
import './notesInterface.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import NoteComponent from './noteComponent/NoteComponent';
import { RootState } from '../../../reduxToolkit/store/store';

// import { useContext, useState, useEffect } from 'react';
// import { Context } from '../../../context/AppContext';
// interface DataObject {
//     title: string;
//     description: string;
// }

const NotesInterface: React.FC = () => {

    // const [dataList, setDataList] = useState<DataObject[]>([]);
    // console.log("🚀 ~ file: NotesInterface.tsx:15 ~ dataList:", dataList)
    // const context = useContext(Context);
    // useEffect(() => {
    //     if (context) {
    //         const { NotesOjectdata } = context;
    //         setDataList((prevArray) => [...prevArray, NotesOjectdata]);
    //     }
    // }, [context?.NotesOjectdata.title !== '' && context?.NotesOjectdata.description !== '']);

    const dataList = useSelector((state: RootState) => state.NewNotes.NotesArray);
    console.log("🚀 ~ file: NotesInterface.tsx:28 ~ dataList:", dataList)


    
    return (
        <>
            <div className='select-none'>
                <section className="w-11/12 m-auto flex items-center mt-7">
                    <p className="sm:text-4xl text-3xl font-extrabold">Notes</p>
                </section>
                <section className='w-11/12 m-auto mt-7 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-2'>
                    {dataList?.map((note, index) => (
                        <NoteComponent key={index} title={note.title} description={note.description} />
                    ))}
                </section>
            </div>

        </>

    );
};

export default NotesInterface;
