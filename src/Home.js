import { useState } from 'react';
import UserList from './UserList';

const Home = () => {

    const [users, setUsers] = useState([
        { name: "Name 1", id: 1},
        { name: "Name 2", id: 2},
        { name: "Name 3", id: 3}
    ]);

    return ( 
        <div className="home">
            <UserList users={users}/>
        </div>
     );
}
 
export default Home;