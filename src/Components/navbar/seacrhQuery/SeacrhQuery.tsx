import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { searchNotes } from '../../../reduxToolkit/dataSlice/Dataslice';
// interface Note {
//     id: string | undefined;
//     title?: string;
//     description: string | undefined;
// }
import { RootState } from '../../../reduxToolkit/store/store';
import { useSelector } from 'react-redux';
import NotesInterface from "../../homeInterface/notesInterface/NotesInterface";
const SeacrhQuery = () => {
    const dispatch = useDispatch();
    const { query } = useParams()
    dispatch(searchNotes(query ? query : ''));
    const filteredNotesArray = useSelector((state: RootState) => state.notesstore.filteredNotesArray);

    return (
        <>

            <div className=" select-none my-7">
                <section className="w-11/12 m-auto flex items-center my-7 ">
                    <p className="sm:text-3xl text-3xl font-extrabold">Search Results
                    </p>
                </section>
                <NotesInterface filteredNotesArray={filteredNotesArray} />
            </div>






        </>
    )
}

export default SeacrhQuery