/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { searchNotes, clearFilteredNotes } from '../../../reduxToolkit/dataSlice/Dataslice';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { useContext, useEffect } from 'react';
import { Context } from '../../../context/AppContext';
import { RootState } from '../../../reduxToolkit/store/store';
import { useSelector } from 'react-redux';
import NotesInterface from "../../homeInterface/notesInterface/NotesInterface";
// import { clearFilteredNotes } from '../../../reduxToolkit/dataSlice/Dataslice';

const SeacrhQuery = () => {
    const context = useContext(Context)
    const { setText } = context || {};
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const { query } = useParams()
    useEffect(() => {
        if (query) {
            dispatch(searchNotes(query ? query : ''));
        }
    }, [query])

    const filteredNotesArray = useSelector((state: RootState) => state.notesstore.filteredNotesArray);
    const filteredNotesArrayLength = useSelector((state: RootState) => state.notesstore.filteredNotesArray.length);
    console.log("🚀 ~ file: SeacrhQuery.tsx:22 ~ SeacrhQuery ~ filteredNotesArray:", filteredNotesArray)
    const navigateBack = () => {
        dispatch(clearFilteredNotes());
        if (setText) {
            setText('')
        }
        Navigate('/');

    };

    return (
        <>

            <div className=" select-none my-7">
                <section className="w-11/12 m-auto flex items-center my-7 ">
                    <section className='flex justify-between items-center gap-3' onClick={navigateBack}>
                        <div className='bg-slate-200 p-2 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300'>
                            <IoChevronBack />
                        </div>
                        <p className=" text-xl font-bold">Search Results</p>

                    </section>
                </section>
                {filteredNotesArrayLength !== 0 ? <>   <NotesInterface filteredNotesArray={filteredNotesArray} /> </> :

                    <>
                        <div className=" w-11/12 m-auto my-7 text-base">
                            No Match Found !!
                        </div>

                    </>
                }

            </div>






        </>
    )
}

export default SeacrhQuery