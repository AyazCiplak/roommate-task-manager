import { useEffect, useState } from 'react';
import UserList from './UserList';
import TaskList from './TaskList';
import useFetch from './useFetch';

const Home = () => {

    //Sample user set
    const [users, setUsers] = useState([
        { name: "Name 1", id: 1},
        { name: "Name 2", id: 2},
        { name: "Name 3", id: 3}
    ]);

    const { tasks , tasksPending, error} = useFetch('http://localhost:8000/tasks')

    

    //Note: && does not display the second element if the first one is false
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            <UserList users={users}/>
            { tasksPending && <div>Loading tasks...</div> }
            { tasks && <TaskList tasks={ tasks }/> }
        </div>
     );
}
 
export default Home;