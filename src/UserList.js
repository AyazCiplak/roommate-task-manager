import { Link } from 'react-router-dom';

const UserList = ({ data: users }) => {

    //Deletes task, then reloads page to update data (using history.go(0))

    return ( 
        <div className="user-list">
            {
            users.map((user) => (
                <div className="preview" key={user.id}>
                        
                        <Link to={`/users/${user.id}`}>
                        <h3>{ user.name }</h3>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default UserList;