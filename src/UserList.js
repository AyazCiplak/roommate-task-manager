import { Link } from 'react-router-dom';

//Lists users based on an array users
const UserList = ({ data: users }) => {

    //Deletes task, then reloads page to update data (using history.go(0))

    return ( 
        <div className="user-list">
            {
            users.map((user) => (
                <div className="preview" key={user.id}>
                        <h3>{ user.name }</h3>
                </div>
            ))}
        </div>
     );
}
 
export default UserList;