import UserList from './UserList';
import TaskList from './TaskList';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const Home = () => {

    const { data : users , dataPending : usersPending, error : usersError} = useFetch('http://localhost:8001/users')
    const { data : tasks , dataPending : tasksPending, error : tasksError} = useFetch('http://localhost:8000/tasks')
    
    //Note: && does not display the second element if the first one is false (cannot attempt to display unloaded data)
    return ( 
        <div className="home">
            { usersError && <div>{ usersError }</div> }
            <div className="users-header">
                <h2>Users</h2>
                <button className="new-user-button">
                    <Link className="new-user-text"to='/new-user'>New</Link>
                </button>
            </div>
            { usersPending && <div>Loading users...</div> }
            { users && <UserList data={ users }/> }

            { tasksError && <div>{ tasksError }</div> }
            <div className="tasks-header">
                <h2>Tasks</h2>
                <button className="new-task-button">
                    <Link className="new-task-text"to='/new-task'>New</Link>
                </button>
            </div>
            { tasksPending && <div>Loading tasks...</div> }
            { tasks && <TaskList data={ tasks }/> }
        </div>
     );
}
 
export default Home;