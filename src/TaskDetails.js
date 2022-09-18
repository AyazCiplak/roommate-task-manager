import { useParams, useHistory, Link } from 'react-router-dom';
import useFetch from './useFetch';


const TaskDetails = () => {
    
    const { id } = useParams();
    const { data, dataPending , error } = useFetch('http://localhost:8000/tasks/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/tasks/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push("/");
        })
    };

    return ( 
        <div className="task-details">
            <h2>Task: { id }</h2>
            { dataPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && (
                <article>
                    <h3>Title: { data.title }</h3>
                    <h4>Description: { data.description }</h4>
                    <h4>Responsible: { data.responsible }</h4>
                    <h4>Due date: { data.date }</h4>
                    <button onClick={handleClick}>Delete Task</button>
                </article>
            )}

            <Link to="/">
                <button>Back</button>
            </Link>

        </div>
     );
}
 
export default TaskDetails;