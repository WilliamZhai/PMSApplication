import { Link } from "react-router-dom";

const NotPage = () => {
  return (  
    <div className="not-found">
      <h2> Sorry </h2>
      <p> That page cannot be found</p>
      <Link to="/"> Back to Home page</Link>
    </div>
  );
}
 
export default NotPage;