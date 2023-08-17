import {useNavigate} from 'react-router-dom';
interface Noteprop {
    id: string | undefined;
    title: string | undefined;
    description: string | undefined;
}
const NoteComponent: React.FC<Noteprop> = (props: Noteprop) => {
    const Navigate = useNavigate();

    return (

        <main className='bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200 flex justify-between flex-col' onClick={() => Navigate(`read-notes/${props.id}`)}>
            <div>
                <div className='sm:text-xl text-base font-semibold text-slate-700 limited-heading-lines'>
                    {props.title}
                </div>
                <div className='my-3 text-slate-600 paragraph-heading-lines'>
                    {props.description}
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-slate-500'>March 12, 2023</p>
            </div>
        </main>

    )
}

export default NoteComponent