/* eslint-disable react-hooks/exhaustive-deps */
import './notesInterface.scss';
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../../context/AppContext';
import NoteComponent from './noteComponent/NoteComponent';

interface DataObject {
    title: string;
    description: string;
}
const NotesInterface: React.FC = () => {

    const [dataList, setDataList] = useState<DataObject[]>([]);
    const context = useContext(Context);
    useEffect(() => {
        console.log("🚀 ~ file: NotesInterface.tsx:17 ~ useEffect ~ useEffect:")
        if (context) {
            const { NotesOjectdata } = context;
            setDataList((prevArray) => [...prevArray, NotesOjectdata]);
        }
    }, [context?.NotesOjectdata.title !== '' &&context?.NotesOjectdata.description !== '']);

    console.log("🚀 ~ file: NotesInterface.tsx:25 ~ context?.NotesOjectdata.title:", context?.NotesOjectdata.title)
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
