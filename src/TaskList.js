import { Link, useHistory } from 'react-router-dom';

const TaskList = ({ data: tasks }) => {

    const history = useHistory();

    //Deletes task, then reloads page to update data (using history.go(0))
    const handleClick = (id) => {
        fetch('http://localhost:8000/tasks/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.go(0);
        })
    };

    return ( 
        <div className="task-list">
            {//Note: Preview just shows main task name, secondary task name and more info should show when clicked
            tasks.map((task) => (
                <div className="task-preview" key={task.id}>

                    <div className="left-tasks">
                    <button onClick={() => handleClick(task.id)}></button>
                        <div className="task-names">
                            <Link className="tasks-link" to={`/tasks/${task.id}`}>
                                <h3>{ task.title }</h3>
                            </Link>
                            <p>{ task.responsible }</p>
                        </div>
                    </div>

                    <h5>{ task.date }</h5>
                    
                </div>
            ))}
        </div>
     );

}
 
export default TaskList;