import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineStar } from 'react-icons/hi';
import { ChangeEvent, useState, KeyboardEvent } from 'react';
const Newnotes = () => {

    const [text, setText] = useState<string>('');

    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const formattedDate = currentDate.toLocaleDateString(undefined, options);



    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const cursorPosition = event.currentTarget.selectionStart as number;
            const newText = text.substring(0, cursorPosition) + '\n' + text.substring(cursorPosition);
            setText(newText);
            event.currentTarget.selectionStart = cursorPosition + 1;
            event.currentTarget.selectionEnd = cursorPosition + 1;
        }
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
        <>


            <div className=" w-11/12 m-auto">
                <section className='flex items-center justify-between py-3 select-none'>
                    <section className='flex justify-between items-center gap-3'>
                        <div className=' bg-slate-200 p-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300' >
                            <IoChevronBack />
                        </div>
                        <p className=' py-2 px-4  bg-purple-400 rounded-full text-white'>{formattedDate}</p>
                    </section>

                    <section className='flex gap-3 justify-between items-center'>
                        <button className=' rounded-full py-2 px-6 bg-purple-400 text-white'>Save</button>

                        <button className='bg-slate-200 p-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300'><HiOutlineStar /></button>
                    </section>
                </section>

                <section className='py-3 px-1'>
                    <input className='w-full text-2xl font-bold  outline-none border-none text-slate-600 mb-2' type="text" placeholder='Title' />
                    <textarea
                        value={text}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        rows={50}
                        className='w-full  outline-none border-none text-slate-600'
                        style={{ resize: 'none' }}
                        placeholder='Type Something ...'
                    />
                </section>

            </div>



        </>
    )
}

export default Newnotes