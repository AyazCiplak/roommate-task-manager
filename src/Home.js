import { useState } from 'react';

const Home = () => {

    const [users, setUsers] = useState([
        { name: "Name 1", id: 1},
        { name: "Name 2", id: 2},
        { name: "Name 3", id: 3}
    ]);

    return ( 
        <div className="home">
            <h2>Users</h2>
            {
            //Note: Preview just shows user name, clicking on user should show more info when it is added
            users.map((user) => (
                <div className="preview" key={user.id}>
                    <h3>{ user.name }</h3>
                </div>
            ))}
        </div>
     );
}
 
export default Home;