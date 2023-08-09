import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineStar } from 'react-icons/hi';
import { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import './newNotes.scss';
const Newnotes = () => {
    const [textareatext, settextareaText] = useState<string>('');
    const [inputtext, setinputText] = useState<string>('');
    const [isTyping, setIsTyping] = useState(false); // State to track typing status



    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const cursorPosition = event.currentTarget.selectionStart as number;
            const newText = textareatext.substring(0, cursorPosition) + '\n' + textareatext.substring(cursorPosition);
            settextareaText(newText);
            event.currentTarget.selectionStart = cursorPosition + 1;
            event.currentTarget.selectionEnd = cursorPosition + 1;
        }
    };



    const [isTextVisible, setIsTextVisible] = useState(false);
    const handleButtonClick = () => {
        { !inputtext ? setIsTextVisible(true) : setIsTextVisible(true) }
    };

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (isTextVisible) {
            timeout = setTimeout(() => {
                setIsTextVisible(false);
            }, 1000);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [isTextVisible]);






    const handletextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        settextareaText(event.target.value);
        { event.target.value.trim() !== '' ? setIsTyping(true) : (!inputtext && setIsTyping(false)) }

    };
    const handleinputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setinputText(event.target.value);
        { event.target.value.trim() !== '' ? setIsTyping(true) : (!textareatext && setIsTyping(false)) }
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
                <section className='flex items-center justify-between py-3 select-none'>
                    <section className='flex justify-between items-center gap-3'>
                        <div className='bg-slate-200 p-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300'>
                            <IoChevronBack />
                        </div>
                        <p className='py-2 px-4 bg-purple-500 rounded-full text-white'>{DateCapture()}</p>
                    </section>

                    <section className='flex gap-3 justify-between items-center '>
                        {/* Conditionally render the Save button */}
                        {isTextVisible && (
                            <div className={`animated-text${isTextVisible ? ' visible' : ''}`}>
                                <p className='px-3 bg-slate-200  rounded-full text-center'>Add Title</p>
                            </div>
                        )}
                        {isTyping && (
                            <button onClick={handleButtonClick} className={`rounded-full py-2 px-6 bg-purple-500 text-white ${isTyping ? 'fadeIn' : 'fadeOut'}`}>
                                Save
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
                        value={inputtext}
                        onChange={handleinputChange}
                    />
                    <textarea
                        value={textareatext}
                        onChange={handletextareaChange}
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