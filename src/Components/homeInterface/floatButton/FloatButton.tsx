import { useState} from 'react';
import React from 'react';
import MenuComponent from './menuComponent/MenuComponent';
import ModalCompoent from './modalComponent/ModalComponent';

interface Foldernewnotesprops {
    foldernewnotes: boolean;
    folderid: string;
}
const FloatButton: React.FC<Foldernewnotesprops> = ({ foldernewnotes, folderid }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <ModalCompoent isModalOpen={isModalOpen} handleModal={handleModal} />
            <MenuComponent folderid={folderid} handleModal={handleModal} foldernewnotes={foldernewnotes} />
        </div>
    )
}

export default FloatButton
