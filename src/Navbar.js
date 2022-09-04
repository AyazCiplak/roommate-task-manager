import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Roommate Task Manager</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/new-task">New Task</Link>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;