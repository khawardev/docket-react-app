import { useNavigate } from 'react-router-dom';

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
    const Navigate = useNavigate();
    return (

        <>
            {id && <>
                <main className='bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200 flex justify-between flex-col' onClick={() => Navigate(`/read-notes/${id}`)}>
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