
import { FiFolder } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../../reduxToolkit/store/store';
interface Folderprop {
    Foldertitle: string;
    Folderid: string | undefined;
}
const FolderComponent: React.FC<Folderprop> = ({ Foldertitle, Folderid }) => {
    const Navigate = useNavigate();
    const DateCapture = () => {
        const currentDate = new Date();
        const date: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const formattedDate = currentDate.toLocaleDateString(undefined, date);
        const [month, day, year] = formattedDate.split(' ');
        const formattedResult = ` ${day} ${month}, ${year}`;
        return formattedResult;
    };
    // const NotesLength = useSelector((state: RootState) => state.notesstore.NewNotesArray.length);
    // onClick = {() => Navigate(`read-folder/${NotesLength}`)}
  return (
    <>
          <main className=' bg-slate-100 sm:p-5 p-4 rounded-2xl hover:cursor-pointer hover:bg-slate-200' onClick={() => Navigate(`read-folder/${Folderid}`)}>
              <div className=' flex items-center  justify-between  '>
                  <p className=' bg-purple-400 rounded-full sm:px-3 px-2 text-white sm:text-base text-sm'>{Foldertitle}</p>
                  <p className=' text-lg milestone-num font-bold'>0</p>
              </div>
              <div className='my-7  text-slate-600  sm:text-8xl text-6xl justify-center flex' >
                  <span ><FiFolder /></span>
              </div>
              <div className='flex items-center sm:justify-start justify-center '>
                  <p className=' text-sm text-slate-500 '>{DateCapture()}</p>
              </div>
          </main>
    </>
  )
}

export default FolderComponent