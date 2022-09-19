import Navbar from './Navbar';
import Home from './Home';
import CreateTask from './CreateTask';
import CreateUser from './CreateUser'
import Settings from './Settings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskDetails from './TaskDetails';
import UserDetails from './UserDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/users/:id">
              <UserDetails />
            </Route>
            <Route path='/new-user'>
              <CreateUser />
            </Route>
            <Route path='/new-task'>
              <CreateTask />
            </Route>
            <Route path="/tasks/:id">
              <TaskDetails />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
