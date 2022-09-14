import { Link, useHistory } from 'react-router-dom';

const TaskList = ({ tasks }) => {

    const history = useHistory();

    const handleClick = (id) => {
        fetch('http://localhost:8000/tasks/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.go(0);
        })
    };

    return ( 
        <div className="user-list">
            {//Note: Preview just shows main task name, secondary task name and more info should show when clicked
            tasks.map((task) => (
                <div className="preview" key={task.id}>
                    <button onClick={() => handleClick(task.id)}>D</button>
                    <Link to={`/tasks/${task.id}`}>
                        <h3>{ task.title }</h3>
                    </Link>
                    <h5>{ task.responsible }</h5>
                    <h5>{ task.date }</h5>
                </div>
            ))}
        </div>
     );

}
 
export default TaskList;