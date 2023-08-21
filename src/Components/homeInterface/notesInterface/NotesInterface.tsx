/* eslint-disable react-hooks/exhaustive-deps */
import './notesInterface.scss';
import NoteComponent from './noteComponent/NoteComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reduxToolkit/store/store';
// import { useDispatch } from 'react-redux';
// import { clearFilteredNotes } from '../../../reduxToolkit/dataSlice/Dataslice';
// import { useEffect } from 'react';
interface NewNotes {
    id: string | undefined;
    title: string | undefined;
    description: string | undefined;
}
interface NotesInterfaceProps {
    filteredNotesArray: NewNotes[]; // Make sure to import and use the correct type for NewNotes
}
const NotesInterface: React.FC<NotesInterfaceProps> = ({ filteredNotesArray }) => {
    const NotesData = useSelector((state: RootState) => state.notesstore.NewNotesArray);
    

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (filteredNotesArray?.length !== 0) {
    //         if (NotesData?.length !== 0) {
    //             dispatch(clearFilteredNotes());
    //         }
    //     }
    // }, [NotesData]);

    
    return (
        <>


            {filteredNotesArray?.length !== 0 ? (
                <section className='w-11/12 m-auto mt-7 grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-2'>
                    {filteredNotesArray?.map((note, index) => (
                        <NoteComponent key={index} id={note.id} title={note.title} description={note.description} />
                    ))}
                </section>

            ) :

                <>
                    {NotesData?.length !== 0 && (
                        <>
                            <div className='select-none my-7'>
                                <section className="w-11/12 m-auto flex items-center my-7 ">
                                    <p className="sm:text-4xl text-3xl font-extrabold">Notes</p>
                                </section>
                                <section className='w-11/12 m-auto mt-7 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-2'>
                                    {NotesData?.map((note, index) => (
                                        <NoteComponent key={index} id={note.id} title={note.title} description={note.description} />
                                    ))}
                                </section>
                            </div>
                        </>
                    )}
                </>
            }





        </>

    );
};

export default NotesInterface;
