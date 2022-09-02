#Roommate Task Manager (in progress)

#Description
Program designed to facilitate delegation of tasks among roommates. Users can: 
- Add, remove and modify a list of roommates
- Create tasks with descriptions, due dates, and individuals responsible for it (based on the custom roommate list)
- Filter tasks based on dates and individuals
- Complete tasks (which are moved to an archived section), or delete tasks

#How to run: 
- Open a command terminal in the code editor
- Under the folder roommate-task-manager, type npm start. This should run the main program
- Open another command terminal
- (*note: when the user database is created, it should be loaded first)
- Under the same folder, type npx json-server --watch data/taskdb.json --port 8000. This should load in the task database
- *NOTE: It is necessary to run the database on port 8000

#Next steps
- Create function to add tasks
- Make button to complete and delete tasks
- Implement basic CSS design
- Create database for user list
- ...
