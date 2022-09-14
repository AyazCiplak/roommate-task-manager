import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const CreateTask = () => {
    
    //Empty states to be filled with info from input form
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [responsible, setResponsible] = useState('None');
    const [date, setDate] = useState('');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { title, description, responsible, date };

        setIsPending(true);

        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
            
        }).then (() => {
            console.log("New task added");
            setIsPending(false);
            history.push('/');
        })
    }
    
    return ( 
        <div className="create-task">
            <h2>Add a new task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Description: </label>
                <textarea
                  required
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                ></textarea>
                <label>Responsible: </label>
                <select
                 value = {responsible}
                 onChange = {(e) => setResponsible(e.target.value)}
                >
                    {// Options below are just samples, will have to connect to users database
                    }
                    <option value="Ayaz">Ayaz</option>
                    <option value="Jordi">Jordi</option>
                    <option value="Manu">Manu</option>
                    <option value="None">N/A</option>
                </select>
                <label>Due date: </label>
                <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
                { !isPending && <button>Add task</button> }
                { isPending && <button disabled>Adding task...</button>}
            </form>
        </div>
     );
}
 
export default CreateTask;