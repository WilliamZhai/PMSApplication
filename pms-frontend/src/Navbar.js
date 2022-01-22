import { Link } from 'react-router-dom';

const Navbar = () => {
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
      </div>
    </nav>
  );
}
 
export default Navbar;