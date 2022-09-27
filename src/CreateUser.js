import {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';


const CreateUser = () => {
    
    //Empty states to be filled with info from input form
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, description };

        setIsPending(true);

        fetch('http://localhost:8001/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
            
        }).then (() => {
            console.log("New user added");
            setIsPending(false);
            history.push('/');
        })
    }
    
    return ( 
        <div className="create-user">
            <h2>Add a new user</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Description: </label>
                <textarea
                  required
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                ></textarea>
                { !isPending && <button>Add User</button> }
                { isPending && <button disabled>Adding user...</button>}
                <Link to="/">
                    <button>Back</button>
                </Link>
            </form>


        </div>
     );
}
 
export default CreateUser;