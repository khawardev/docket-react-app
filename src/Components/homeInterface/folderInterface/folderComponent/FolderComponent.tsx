/* eslint-disable react-hooks/exhaustive-deps */

import { FiFolder } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reduxToolkit/store/store';
import { useContext,  } from 'react';
import { Context } from '../../../../context/AppContext';
import { deleteFolder } from '../../../../reduxToolkit/dataSlice/Dataslice';
import { useDispatch } from 'react-redux';

interface Folderprop {
    Foldertitle: string;
    Folderid: string | undefined;
}
const FolderComponent: React.FC<Folderprop> = ({ Foldertitle, Folderid }) => {
    const Navigate = useNavigate();

    const DateCapture = () => {
        const currentDate = new Date();
        const date: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return currentDate.toLocaleDateString(undefined, date);
    }
    const NewnotesArray = useSelector((state: RootState) => state.foldersstore.NewFolderArray[Folderid === undefined ? '0' : +Folderid]?.newnotes);


    const context = useContext(Context);
    const dispatch = useDispatch();
    const { DeletecheckMark } = context || {};
    const handleClick = (clickedId?: number) => {
        if (clickedId===0) {
            dispatch(deleteFolder(clickedId.toString()));

        } if (clickedId) {
            dispatch(deleteFolder(clickedId.toString()));

        }
    };

    return (
        <>
            <main className={` bg-slate-100 sm:p-5 p-4 rounded-2xl hover:cursor-pointer ${DeletecheckMark ? 'hover:bg-red-100' : 'hover:bg-slate-200'}`} onClick={DeletecheckMark ? () => handleClick(Folderid === undefined ? undefined : +Folderid) : () => Navigate(`read-folder/${Folderid}`)} >
                <div className=' flex items-center  justify-between  '>
                    <p className=' bg-purple-400 rounded-full sm:px-3 px-2 text-white sm:text-base text-sm'>{Foldertitle}</p>
                    <p className=' text-lg milestone-num font-bold'>{NewnotesArray.length}</p>
                </div>
                <div className='my-7  text-slate-600  sm:text-8xl text-6xl justify-center flex' >
                    <span ><FiFolder /></span>
                </div>
                <div className='flex items-center sm:justify-start justify-center '>
                    <p className=' text-sm text-slate-500 '>{DateCapture()}</p>
                </div>
            </main>
        </>
    )
}

export default FolderComponent