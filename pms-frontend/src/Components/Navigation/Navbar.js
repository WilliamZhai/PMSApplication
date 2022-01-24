import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

const NavigationBar = () => {
  const navbarTitle = "PMS Portal"
  const width = '800px'

  return (
    <nav className="navbar" style={{
      maxWidth: width
    }}>
      <h1>{navbarTitle}</h1>
      <div className="links">
        <NavLink  
          className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
          to="/">Home 
        </NavLink>
        <NavLink  
          className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
          to="/account">My Account 
        </NavLink>
        <NavLink  
          className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
          to="/administration">Administration 
        </NavLink>
        <NavLink  
          className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
          to="/create">Create 
        </NavLink>
      </div>
    </nav> 
  );
}
 
export default NavigationBar;