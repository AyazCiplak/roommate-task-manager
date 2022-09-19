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
            <h2>User: { id }</h2>
            { dataPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { user && (
                <article>
                    <h3>Title: { user.name }</h3>
                    <h4>Description: { user.description }</h4>
                    <button onClick={handleClick}>Delete User</button>
                </article>
            )}

            <Link to="/">
                <button>Back</button>
            </Link>

        </div>
     );
}
 
export default UserDetails;