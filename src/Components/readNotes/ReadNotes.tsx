import { useParams } from 'react-router-dom';
import EditNotes from './editNotes/EditNotes';
const ReadNotes = () => {
    const { id } = useParams();
    return (
        <>
            <EditNotes Id={id}  />
        </>
    )
}

export default ReadNotes