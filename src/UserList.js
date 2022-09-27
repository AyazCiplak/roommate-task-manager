import { Link } from 'react-router-dom';

const UserList = ({ data: users }) => {

    //Deletes task, then reloads page to update data (using history.go(0))

    return ( 
        <div className="users-list">
            {
            users.map((user) => (
                <Link className="users-link" to={`/users/${user.id}`}>
                <div className="user-preview" key={user.id}> 

                        <h3>{ user.name }</h3>
                        
                </div>
                </Link>
            ))}
        </div>
     );
}
 
export default UserList;