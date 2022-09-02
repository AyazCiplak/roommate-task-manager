import { useState } from 'react';
import UserList from './UserList';
import TaskList from './TaskList';

const Home = () => {

    //Sample user set
    const [users, setUsers] = useState([
        { name: "Name 1", id: 1},
        { name: "Name 2", id: 2},
        { name: "Name 3", id: 3}
    ]);

    //Sample task set
    const [tasks, setTasks] = useState([
        { title: "Task 1", description: "This is the first task", responsible: "Ayaz", date: "01/01/2023", id: 1},
        { title: "Task 2", description: "This is the second task", responsible: "Jordi", date: "03/01/2023", id: 2},
        { title: "Task 3", description: "This is the third task", responsible: "Emanuele", date: "02/01/2023", id: 3}
    ])

    return ( 
        <div className="home">
            <UserList users={users}/>
            <TaskList tasks={tasks}/>
        </div>
     );
}
 
export default Home;