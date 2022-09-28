# Roommate Task Manager
Program designed to facilitate delegation of tasks among roommates. Users can: 
- Add, remove and modify a list of users / roommates
- Create tasks with descriptions, due dates, and individuals responsible for it (based on the custom roommate list)
- View user and task descriptions
- Complete tasks (which are moved to an archived section), or delete tasks

Note: All information inputted by the user is stored in databases (JSON files), so data is saved and remains there during next usage!

# Screenshots 
![todo-main-page](https://user-images.githubusercontent.com/97311304/192701633-57fb8261-50e5-419a-bc5d-15eeb995c9d7.jpg)
-> Home page (note that CSS styles have not yet been fully implemented)

![todo-create-task](https://user-images.githubusercontent.com/97311304/192701801-498fa846-1b67-4cc4-a10e-25589d94eba9.jpg)
-> Task creation form (reached by clicking on the "new" button beside the Tasks header, or by clicking "New Task" on the navbar

![todo-task-details](https://user-images.githubusercontent.com/97311304/192701923-d44bdb9d-efe6-4e87-949e-dd522cc60bf4.jpg)
-> Task detail page (reached by clicking on the task name)



# Technologies used
- React.js, for all of the webpage functionality
- CSS, for most styling and display of items
- JSON databases, for storage of data

# How to run: 
- Open folder in an IDE
- Open a command terminal in the code editor, and type npm start. This should start the webpage locally on your computer
- Open a second command terminal, and type npx json-server --watch data/userdb.json --port 8001. This should run the JSON database for USERS locally on your computer on port (address) 8001, and allow the main React webpage to access it. 
- Open one last command terminal, and type npx json-server --watch data/taskdb.json --port 8000. This should run the JSON database for TASKS locally on your computer on port (adress) and allow the main React webpage to access it. 

*NOTE: It is necessary to run the databases on ports 8001 and 8000 respectively, since the program is coded to read/write from/to those local addresses. 

# Next steps
- Finalize and reorganize CSS desgin, especially colours and text fonts
- Implement a MERN stack with a custom database for a more solid back-end and to replace JSON databases 
