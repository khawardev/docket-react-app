/* eslint-disable react-hooks/exhaustive-deps */
import { IoChevronBack, IoCheckmarkCircleSharp } from 'react-icons/io5';
import { HiOutlineStar } from 'react-icons/hi';
import { ChangeEvent, useState, KeyboardEvent } from 'react';
import './newNotes.scss';
// import  {useHistory}  from 'react';
// import { useNavigate } from "react-router-dom";
// import { useContext } from 'react';
// import { Context } from '../../context/AppContext';
// type Data = {
//     title: string;
//     description: string;
// }
import { useDispatch } from 'react-redux';
import { addData } from '../../reduxToolkit/dataSlice/Dataslice';
const Newnotes = () => {
    const [Title, setTitle] = useState<string>('');
    const [Description, setDescription] = useState<string>('');
    const [IsSavebutton, setIsSavebutton] = useState(false); // State to track typing status
    const [savedtext, setSavedText] = useState(false)
    const [isSaving, setIsSaving] = useState(false);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     { Title === '' && Description === '' && setNotesOjectData({ title: '', description: '' }) }
    // }, [Title, Description === ''])






    // const context = useContext(Context)
    // if (!context) {
    //     return 'null'; 
    // }
    // const {setNotesOjectData } = context;





    // const handleAddData = () => {
    //     const newData = { title, description };
    //     dispatch(addData(newData));
    // };


    const handleButtonClick = () => {
        const newItem = { title: Title, description: Description };
        // setNotesOjectData(newItem);
        dispatch(addData(newItem));
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
        }, 1000);
        setTimeout(() => {
            setIsSavebutton(false);
        }, 1800);
        setSavedText(false)
    };


    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const cursorPosition = event.currentTarget.selectionStart as number;
            const newText = Description.substring(0, cursorPosition) + '\n' + Description.substring(cursorPosition);
            setDescription(newText);
            event.currentTarget.selectionStart = cursorPosition + 1;
            event.currentTarget.selectionEnd = cursorPosition + 1;
        }
    };


    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
        {Title !== '' ? setIsSavebutton(true) : setIsSavebutton(false) }
        setSavedText(true);
    };

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
        { event.target.value.trim() !== '' ? setIsSavebutton(true) : setIsSavebutton(false) }
        setSavedText(true);
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
                    <section className='flex justify-between items-center gap-3'>
                        <div className='bg-slate-200 p-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300'>
                            <IoChevronBack />
                        </div>
                    </section>

                    <section className='flex gap-3 justify-between items-center '>
                        {IsSavebutton && (
                            <button onClick={handleButtonClick} className={`rounded-full py-2 px-6 bg-purple-500 text-white ${IsSavebutton ? 'fadeIn' : 'fadeOut'}`}>
                                {isSaving ?
                                    <>
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                        Saving ...
                                    </> :
                                    <>
                                        {savedtext ? `save` :
                                            <div className='flex items-center justify-center gap-2 '>
                                                <IoCheckmarkCircleSharp size={19} /> Saved
                                            </div>
                                        }
                                    </>
                                }
                            </button>
                        )}
                        <button className='bg-slate-200 p-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300'>
                            <HiOutlineStar />
                        </button>
                    </section>
                </section>

                <section className='py-3 px-1'>

                    <input
                        className='w-full text-2xl font-bold outline-none border-none text-slate-700 mb-2'
                        type="text"
                        placeholder='Title'
                        value={Title}
                        onChange={handleTitleChange}
                    />
                    <p className=' text-slate-400 mb-3 select-none '>{DateCapture()}</p>

                    <textarea
                        value={Description}
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

export default Newnotes