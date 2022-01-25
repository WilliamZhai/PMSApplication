import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Components/Utilities/ErrorMessage";
import LoadingMessage from "../Components/Utilities/LoadingMessage";
import TeacherList from "../Components/../TeacherList";
import useFetch from "../Components/../api/useFetch";

import './Pages.css';


const HomePage = () => {
  const navigate = useNavigate();
  const title = "Home Page"
  const {data:teachers, isPending, error} = useFetch("http://localhost:5000/api/employees");


  const handleDeleteTeacher = (id) => {
    fetch('http://localhost:5000/api/employees/' + id, {
      method: 'DELETE',
    }).then(() =>{
      console.log("teacher with id " + id + " deleted")
      window.location.reload();

    })
  }

  // runs every render for given list of dependencies
  // use to fetch data, auth service, etc

  return (  
    <div className="home">
      { isPending && <LoadingMessage message="Loading..."/> }
      { error && <ErrorMessage error={error.message}/>}
      <h2>{title}</h2>
      
      

      {teachers && <TeacherList teachers={teachers} title="Teachers" handleDelete={handleDeleteTeacher}></TeacherList>}
      {/* <TeacherList teachers={teachers.filter((teacher) => teacher.name === 'Jason')} title="Jason" handleDelete={handleDeleteTeacher}></TeacherList> */}

    </div>
  );
}
 
export default HomePage;

