const TaskList = ({ tasks }) => {
    
    return ( 
        <div className="user-list">
            <h2>Tasks</h2>
            {//Note: Preview just shows main task name, secondary task name and more info should show when clicked
            tasks.map((task) => (
                <div className="preview" key={task.id}>
                    <h3>{ task.title }</h3>
                    <h5>{ task.responsible }</h5>
                    <h5>{ task.date }</h5>
                </div>
            ))}
        </div>
     );

}
 
export default TaskList;