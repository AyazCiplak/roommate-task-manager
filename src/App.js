import Navbar from './Navbar';
import Home from './Home';
import CreateTask from './CreateTask';
import Settings from './Settings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            <Route path='/new-task'>
              <CreateTask />
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
