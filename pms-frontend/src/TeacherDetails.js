import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TeacherDetails = () => {

  const {REACT_APP_SERVER_URL} = process.env;
  const { id } = useParams();
  const url = REACT_APP_SERVER_URL + id;
  const { data:teacher, isPending, error} = useFetch(url);

  return (  
    <div className="teacher-details">
      { isPending && <h2>Loading...</h2>}
      { error && <h2>Error: {error}</h2>}
      
      { teacher && (
        <div>
          <h2> {teacher.name} </h2>
          <p> {teacher.email} </p>
        </div>
      )}

    </div>
  );
}
 
export default TeacherDetails;