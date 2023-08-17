import { useState} from 'react';
import React from 'react';
import MenuComponent from './menuComponent/MenuComponent';
import ModalCompoent from './modalComponent/ModalComponent';
const FloatButton: React.FC = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <MenuComponent handleModal={handleModal} />
            <ModalCompoent isModalOpen={isModalOpen} handleModal={handleModal} />
        </div>
    )
}

export default FloatButton

// import { useContext } from 'react';
// import { Context } from '../../../context/AppContext';
// const [ispopup, setIspopup] = useState(false);
{/* {ispopup && (
    <div className={`animated-text ${ispopup ? ' visible' : ''}`}>
        <p className='px-3 bg-slate-200  rounded-full text-center text-slate-500'>Add Folder Name</p>
    </div>
)} */}



    // useEffect(() => {
    //     let timeout: ReturnType<typeof setTimeout>;
    //     if (ispopup) {
    //         timeout = setTimeout(() => {
    //             setIspopup(false);
    //         }, 1000);
    //     }
    //     return () => {
    //         if (timeout) {
    //             clearTimeout(timeout);
    //         }
    //     };
    // }, [ispopup]);


    // const context = useContext(Context)
    // if (!context) {
    //     return 'null'; 
    // }
    // const {setNewFolderText} = context; 
     // else {
        //     setIspopup(true)
        // }