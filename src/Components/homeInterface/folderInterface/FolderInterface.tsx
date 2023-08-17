import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reduxToolkit/store/store';
import FolderComponent from './folderComponent/FolderComponent';

const NewFolder: React.FC = () => {

    const folderData = useSelector((state: RootState) => state.foldersstore.NewFolderArray);


    return (
        <>
            {folderData.length !== 0 &&

                <div className=' select-none my-7'>
                    <section className=" w-11/12 m-auto flex items-center my-7">
                        <p className=" sm:text-4xl text-3xl font-extrabold ">Folders</p>
                    </section>
                    <section className='w-11/12 m-auto mt-7 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 '>
                        {folderData.map((string, index) => (
                            <FolderComponent key={index} newFolder={string.newFolder}  />
                        ))}
                    </section>
                </div>
            }

        </>
    )
}

export default NewFolder