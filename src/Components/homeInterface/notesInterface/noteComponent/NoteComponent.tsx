import { useNavigate } from 'react-router-dom';
import { useContext} from 'react';
import { Context } from '../../../../context/AppContext';
import { deleteNotes } from '../../../../reduxToolkit/dataSlice/Dataslice';
import { useDispatch } from 'react-redux';

interface NoteProps {
    id?: string;
    title?: string;
    description?: string;
    newnotesid?: string;
}
interface FolderId {
    folderid?: string;
}

const NoteComponent: React.FC<NoteProps & FolderId> = ({ id, title, description, newnotesid, folderid }) => {

    
    const context = useContext(Context);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const { DeletecheckMark} = context || {};



    const handleClick = (clickedId: number) => {
        dispatch(deleteNotes(clickedId.toString()));
    };

    

    const DateCapture = () => {
        const currentDate = new Date();
        const date: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return currentDate.toLocaleDateString(undefined, date);
    }

    return (

        <>
            {id && <>
                <main className={` bg-slate-100 p-5 rounded-2xl ${DeletecheckMark ? 'hover:bg-red-100' : 'hover:bg-slate-200'} hover:cursor-pointer  flex justify-between flex-col`} onClick={DeletecheckMark ? () => handleClick(+id) : () => Navigate(`/read-notes/${id}`)}>
                    <div>
                        <div className='sm:text-xl text-base font-semibold text-slate-700 limited-heading-lines'>
                            {title}
                        </div>
                        <div className='my-3 text-slate-600 paragraph-heading-lines'>
                            {description}
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-slate-500'>{DateCapture()}</p>
                    </div>
                </main>

            </>}
            {newnotesid && <>
                <main className='bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200 flex justify-between flex-col' onClick={() => Navigate(`/read-folder/${folderid}/notes/${newnotesid}`)}>
                    <div>
                        <div className='sm:text-xl text-base font-semibold text-slate-700 limited-heading-lines'>
                            {title}
                        </div>
                        <div className='my-3 text-slate-600 paragraph-heading-lines'>
                            {description}
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-slate-500'>March 12, 2023</p>
                    </div>
                </main>


            </>}



        </>
    )
}

export default NoteComponent