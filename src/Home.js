import { useEffect, useState } from 'react';
import UserList from './UserList';
import TaskList from './TaskList';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const Home = () => {

    //Sample user set
   // const [users, setUsers] = useState([
   //     { name: "Name 1", id: 1},
   //     { name: "Name 2", id: 2},
   //     { name: "Name 3", id: 3}
   // ]);

    const { data : users , dataPending : usersPending, error : usersError} = useFetch('http://localhost:8001/users')
    const { data : tasks , dataPending : tasksPending, error : tasksError} = useFetch('http://localhost:8000/tasks')
    //Insert following line over first "tasks-header div"
    //<UserList users={users}/>
    

    //Note: && does not display the second element if the first one is false
    return ( 
        <div className="home">
            { tasksError && <div>{ tasksError }</div> }
            <div className="users-header">
                <h2>Users</h2>
                <button className="new-user-button">
                    <Link to='/new-user'>+</Link>
                </button>
            </div>
            { usersPending && <div>Loading users...</div> }
            { users && <UserList data={ users }/> }


            <div className="tasks-header">
                <h2>Tasks</h2>
                <button className="new-task-button">
                    <Link to='/new-task'>+</Link>
                </button>
            </div>
            { tasksPending && <div>Loading tasks...</div> }
            { tasks && <TaskList data={ tasks }/> }
        </div>
     );
}
 
export default Home;