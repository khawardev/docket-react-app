/* eslint-disable react-hooks/exhaustive-deps */
import './notesInterface.scss';
import NoteComponent from './noteComponent/NoteComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reduxToolkit/store/store';

const NotesInterface = () => {

    const NotesData = useSelector((state: RootState) => state.notesstore.NewNotesArray);
 
  
    
    return (
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

    );
};

export default NotesInterface;
