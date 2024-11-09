import { useDispatch } from 'react-redux';
import { addFolder } from '../../../../reduxToolkit/dataSlice/Dataslice';
import { useState, KeyboardEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reduxToolkit/store/store';

import { useContext, } from 'react';
import { Context } from '../../../../context/AppContext';
interface ModalProps {
  handleModal: () => void;
  isModalOpen:boolean
}

const ModalComponent: React.FC<ModalProps> = ({ handleModal, isModalOpen }) => {
  const context = useContext(Context);
  const { setDeletecheckMark } = context || {};
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const NotesLength = useSelector((state: RootState) => state.foldersstore.NewFolderArray.length);

  const EnterQueryHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && query.length > 0 && query.length <= 13) {
      const folderObject = { Folderid: NotesLength.toString(), Foldertitle: event.currentTarget.value, id: 0, newnotes: [] };
      dispatch(addFolder(folderObject))
      setQuery('');
      handleModal()

      if (setDeletecheckMark) {
        setDeletecheckMark(false)
      }

    }

  };
  const ClickQueryHandler = () => {
    if (query.length > 0 && query.length <= 13) {
      const folderObject = { Folderid: NotesLength.toString(), Foldertitle: query, id: 0, newnotes: [] };
      dispatch(addFolder(folderObject))
      setQuery('');
      handleModal();

      if (setDeletecheckMark) {
        setDeletecheckMark(false)
      }

    }

  };


  return (
    <>
      
      {isModalOpen && (
        <>

          <div className={`fixed inset-0 bg-black/50 ${isModalOpen ? 'fadeIn' : 'fadeOut'}`} >
            <div className="flex items-center justify-center h-2/3">
              <div className="bg-purple-400 p-6 rounded-2xl shadow-lg sm:w-1/3 w-11/12 transition-opacity ease-in-out duration-1000">

                <h2 className="text-xl font-semibold  text-slate-100">Enter name of folder</h2>
                <h2 className="text-sm mb-4 text-slate-200">length of characters should less then 13</h2>
                <input
                  type="text"
                  className='text-lg w-full search-input-header mb-6'
                  autoFocus
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyUp={EnterQueryHandler}

                />
                <div className="flex justify-end gap-2 items-center">
                  <button className=' px-5 py-2 rounded-full  bg-purple-600  text-white hover:bg-purple-500' onClick={handleModal}>
                    close
                  </button>
                  <button onClick={ClickQueryHandler} className='  py-2 px-10  rounded-full bg-purple-500 text-white hover:bg-purple-600'>
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>

      )}

    </>
  )
}

export default ModalComponent