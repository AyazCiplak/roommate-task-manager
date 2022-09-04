const CreateTask = () => {
    return ( 
        <div className="create-task">
            <h2>Add a new task</h2>
            <form>
                <label>Task title: </label>
                <input 
                type="text"
                required
                />
                <label>Description: </label>
                <textarea
                  required 
                ></textarea>
                <label>Responsible: </label>
                <select>
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
                />
                <button>Add task</button>
            </form>
        </div>
     );
}
 
export default CreateTask;