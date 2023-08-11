import './notesInterface.scss';
import React from 'react';
const Banner: React.FC = () => {

    return (
        <div className='select-none'>
            <section className="w-11/12 m-auto flex items-center mt-7">
                <p className="sm:text-4xl text-3xl font-extrabold">Notes</p>
            </section>
            <section className='w-11/12 m-auto mt-7 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-2'>
                <main className='bg-slate-100 p-5 rounded-2xl hover:cursor-pointer hover:bg-slate-200'>
                    <div className='sm:text-xl text-base font-semibold text-slate-700 limited-heading-lines'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum dolor obcaecati laborum enim unde ad pariatur quas ex ducimus! Sit quo illum nihil excepturi illo deleniti! Voluptatem, labore.
                    </div>
                    <div className='my-3 text-slate-600 paragraph-heading-lines'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam Non laborum earum ratione sint qui C Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam Non laborum earum ratione sint qui Cupiditate, dicta recusandae.
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-slate-500'>March 12, 2023</p>
                    </div>
                </main>
            </section>

        </div>
    );
};

export default Banner;
