import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { searchNotes } from '../../../reduxToolkit/dataSlice/Dataslice';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

// interface Note {
//     id: string | undefined;
//     title?: string;
//     description: string | undefined;
// }
import { RootState } from '../../../reduxToolkit/store/store';
import { useSelector } from 'react-redux';
import NotesInterface from "../../homeInterface/notesInterface/NotesInterface";
// import { clearFilteredNotes } from '../../../reduxToolkit/dataSlice/Dataslice';

const SeacrhQuery = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const { query } = useParams()
    dispatch(searchNotes(query ? query : ''));
    const filteredNotesArray = useSelector((state: RootState) => state.notesstore.filteredNotesArray);
    const navigateBack = () => {
        Navigate(-1); // Navigate back to the previous route
        // dispatch(clearFilteredNotes());
        // dispatch(searchNotes(''));
    };

    return (
        <>

            <div className=" select-none my-7">
                <section className="w-11/12 m-auto flex items-center my-7 ">
                    <section className='flex justify-between items-center gap-3' onClick={navigateBack}>
                        <div className='bg-slate-200 p-2 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300'>
                            <IoChevronBack />
                        </div>
                        <p className="sm:text-3xl text-3xl font-extrabold">Search Results</p>

                    </section>
                </section>
                <NotesInterface filteredNotesArray={filteredNotesArray} />
            </div>






        </>
    )
}

export default SeacrhQuery