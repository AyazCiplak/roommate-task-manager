import { useParams, useHistory, Link } from 'react-router-dom';
import useFetch from './useFetch';


const UserDetails = () => {
    
    const { id } = useParams();
    const { data : user, dataPending , error } = useFetch('http://localhost:8001/users/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8001/users/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push("/");
        })
    };

    return ( 
        <div className="user-details">
            <h2>User Details</h2>
            { dataPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { user && (
                <article>
                    <h3>Name: { user.name }</h3>
                    <p><b>Description:</b> { user.description }</p>
                    <div className = "details-buttons">
                        <Link to="/">
                            <button>Back</button>
                        </Link>
                        <button onClick={handleClick}>Delete User</button>
                    </div>
                </article>
            )}



        </div>
     );
}
 
export default UserDetails;