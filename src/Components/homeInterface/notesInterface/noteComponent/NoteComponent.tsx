interface Noteprop {
    title: string;
    description: string;
}
const NoteComponent: React.FC<Noteprop> = (props: Noteprop) => {
    return (
      
           
                <main className='bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                    <div className='sm:text-xl text-base font-semibold text-slate-700 limited-heading-lines'>
                        {props.title}
                    </div>
                    <div className='my-3 text-slate-600 paragraph-heading-lines'>
                        {props.description}
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-slate-500'>March 12, 2023</p>
                    </div>
                </main>
           

      
    )
}

export default NoteComponent