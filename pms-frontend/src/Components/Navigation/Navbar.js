import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const navbarTitle = "PMS Portal"
  const width = '800px'

  return (
    <nav className="navbar" style={{
      maxWidth: width
    }}>
      <h1>{navbarTitle}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/account">My Account</Link>
        <Link to="/administration">Administration</Link>
      </div>
    </nav> 
  );
}
 
export default NavigationBar;