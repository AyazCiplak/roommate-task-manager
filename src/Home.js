import { useEffect, useState } from 'react';
import UserList from './UserList';
import TaskList from './TaskList';

const Home = () => {

    //Sample user set
    const [users, setUsers] = useState([
        { name: "Name 1", id: 1},
        { name: "Name 2", id: 2},
        { name: "Name 3", id: 3}
    ]);

    //Gets filled with data from JSON file
    const [tasks, setTasks] = useState(null)

    const [tasksPending, setTasksPending] = useState(true);

    //Fetches data from taskdb JSON file (note: must be running on port 8000)
    useEffect(() => {
        fetch('http://localhost:8000/tasks')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setTasksPending(false);
            setTasks(data); 
        })
    }, []);

    //Note: && does not display the second element if the first one is false
    return ( 
        <div className="home">
            <UserList users={users}/>
            { tasksPending && <div>Loading tasks...</div> }
            { tasks && <TaskList tasks={tasks}/> }
        </div>
     );
}
 
export default Home;