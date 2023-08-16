/* eslint-disable react-hooks/exhaustive-deps */
import './notesInterface.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import NoteComponent from './noteComponent/NoteComponent';
import { RootState } from '../../../reduxToolkit/store/store';

const NotesInterface: React.FC = () => {

    const NotesData = useSelector((state: RootState) => state.notesstore.NewNotesArray);
    console.log("🚀 ~ file: NotesInterface.tsx:28 ~ NotesData:", NotesData)



    return (
        <>
            {NotesData.length !== 0 && (
                <>
                    <div className='select-none'>
                        <section className="w-11/12 m-auto flex items-center mt-7">
                            <p className="sm:text-4xl text-3xl font-extrabold">Notes</p>
                        </section>
                        <section className='w-11/12 m-auto mt-7 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-2'>
                            {NotesData?.map((note, index) => (
                                <NoteComponent key={index} title={note.title} description={note.description} />
                            ))}
                        </section>
                    </div>
                </>
            )}

        </>

    );
};

export default NotesInterface;
