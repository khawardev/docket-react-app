import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../reduxToolkit/store/store';
import { IoChevronBack } from 'react-icons/io5';
const ReadFolder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1); // Navigate back to the previous route
  };
  const folder = useSelector((state: RootState) =>
    state.foldersstore.NewFolderArray.find(folder => folder.Folderid === id)
  );
  return (
    <div className=' w-11/12 m-auto'>
      <section className='flex justify-start items-center gap-3  my-7'>
        <div className='bg-slate-200 p-3 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-300' onClick={navigateBack}>
          <IoChevronBack />
        </div>
        <h1 className=' text-3xl font-bold flex items-center'><span className=' bg-purple-400 rounded-full sm:px-5 px-3 sm:py-1 text-white  text-xl font-bold '>{folder?.Foldertitle}</span></h1>
      </section>

    </div>


  )
}

export default ReadFolder