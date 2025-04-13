/* eslint-disable react-hooks/exhaustive-deps */
import { RootState } from '../../../reduxToolkit/store/store';
import { editNewNoteToFolder } from '../../../reduxToolkit/dataSlice/Dataslice';
import { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { BiCheckCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

interface ReadnotesProps {
    Id?: string;
}
interface Note {
    newnotesid?: string;
    title?: string;
    description?: string;
}
const EditNotesFolder: React.FC<ReadnotesProps> = () => {

    const { folderid, newnotesid } = useParams();
    const NewnotesArray = useSelector((state: RootState) => state.foldersstore.NewFolderArray[folderid === undefined ? '0' : +folderid]?.newnotes);
    const selectedNote = NewnotesArray?.find((note: Note) => note.newnotesid === newnotesid);
    const Navigate = useNavigate()
    const navigateBack = () => {
        Navigate(-1);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);




    const [ReadTitle, setReadTitle] = useState<string | undefined>(selectedNote?.title);
    const [ReadDescription, setReadDescription] = useState<string | undefined>(selectedNote?.description);
    const [IsUpdatebutton, setIsUpdatebutton] = useState(false); // State to track typing status
    const [Updatedtext, setUpdatedText] = useState(false)
    const [isSaving, setIsSaving] = useState(false);
    const dispatch = useDispatch();


    // const NotesLength = useSelector((state: RootState) => state.notesstore.NewNotesArray.length);
    const handleButtonClick = () => {
        dispatch(editNewNoteToFolder({
            folderid,
            newNote: {
                newnotesid: newnotesid,
                title: ReadTitle,
                description: ReadDescription,
            },
        }));
        // dispatch(editNewNoteToFolder({ folderid: 'your-folder-id', newNote }));
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
        }, 1000);
        setTimeout(() => {
            setIsUpdatebutton(false);
        }, 1800);
        setUpdatedText(false)
        setTimeout(() => {
            Navigate(-1)
        }, 2200);

    };


    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const cursorPosition = event.currentTarget.selectionStart as number;
            const newText = ReadDescription?.substring(0, cursorPosition) + '\n' + ReadDescription?.substring(cursorPosition);
            setReadDescription(newText);
            event.currentTarget.selectionStart = cursorPosition + 1;
            event.currentTarget.selectionEnd = cursorPosition + 1;
        }
    };


    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        { ReadDescription ? setReadDescription(event.target.value) : setReadDescription(event.target.value); }
        { ReadDescription !== '' ? setIsUpdatebutton(true) : setIsUpdatebutton(false) }
        setUpdatedText(true);
    };

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setReadTitle(event.target.value)
        { event.target.value.trim() !== '' ? setIsUpdatebutton(true) : setIsUpdatebutton(false) }
        setUpdatedText(true);
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
            <div className="w-11/12 m-auto">
                <section className='flex items-center justify-between py-3 select-none' >


                    <section className='flex justify-between items-center gap-3' onClick={navigateBack}>
                        <div className='bg-slate-200 p-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300'>
                            <IoChevronBack />
                        </div>
                    </section>

                    <section className='flex gap-3 justify-between items-center '>


                        {IsUpdatebutton && (
                            <button onClick={handleButtonClick} className={`rounded-full py-2 px-6 bg-purple-500 text-white ${IsUpdatebutton ? 'fadeIn' : 'fadeOut'}`}>
                                {isSaving ?
                                    <>
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-1 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                        Updating ...

                                    </> :
                                    <>

                                        {Updatedtext ? `update` :
                                            <div className='flex items-center justify-center gap-1 '>
                                                <BiCheckCircle size={19} /> Updated
                                            </div>
                                        }

                                    </>
                                }
                            </button>
                        )}
                    </section>
                </section>

                <section className='py-3 px-1'>

                    <input
                        className='w-full text-2xl font-bold outline-none border-none text-slate-700 mb-2'
                        type="text"
                        placeholder='Title'
                        value={ReadTitle}
                        onChange={handleTitleChange}
                    />

                    <p className=' text-slate-400 mb-3 select-none '>{DateCapture()}</p>

                    <textarea
                        value={ReadDescription}
                        onChange={handleDescriptionChange}
                        onKeyDown={handleKeyDown}
                        rows={50}
                        className='w-full outline-none border-none text-slate-600'
                        style={{ resize: 'none' }}
                        placeholder='Type Something ...'
                    />
                </section>
            </div>
        </>
    )
}

export default EditNotesFolder