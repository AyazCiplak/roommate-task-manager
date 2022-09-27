import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="navbar-content">
                <h1>Roommate Task System</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/new-task">New Task</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;