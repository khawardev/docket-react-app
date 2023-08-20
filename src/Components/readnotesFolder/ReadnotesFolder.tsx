/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import NoteComponent from '../homeInterface/notesInterface/noteComponent/NoteComponent';


interface NewNotesF {
    newnotesid: string | undefined;
    title?: string;
    description?: string;
}


interface FolderNotesdataQ {
    FolderNotesdata: NewNotesF[];
}

interface FolderId {
    folderid ?: string;
}
const ReadnotesFolder: React.FC<FolderNotesdataQ & FolderId> = ({ FolderNotesdata, folderid }) => {
    return (
        <>
            {FolderNotesdata?.length !== 0 &&
                <>
                    <div className='select-none my-7'>
                        <section className="w-11/12 m-auto flex items-center my-7 ">
                            <p className="sm:text-3xl text-3xl font-extrabold">Folder Notes</p>
                        </section>
                        <section className='w-11/12 m-auto mt-7 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-2'>
                            {FolderNotesdata?.map((note, index) => (
                                <NoteComponent folderid={folderid} key={index} newnotesid={note.newnotesid} title={note.title} description={note.description} />
                            ))}
                        </section>
                    </div>
                </>
            }
        </>

    );
};

export default ReadnotesFolder;
