const UserList = (props) => {

    const users = props.users;

        //User title coded in since prop only used to list users
    return ( 
        <div className="user-list">
            <h2>Users</h2>
            {//Note: Preview just shows user name, clicking on user should show more info when it is added  
            users.map((user) => (
                <div className="preview" key={user.id}>
                    <h3>{ user.name }</h3>
                </div>
            ))}
        </div>
     );
}
 
export default UserList;