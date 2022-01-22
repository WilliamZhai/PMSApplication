import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Utilities/ErrorMessage";
import LoadingMessage from "../Utilities/LoadingMessage";
import TeacherList from "../../TeacherList";
import useFetch from "../../useFetch";

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
      <h2>{title}</h2>
      
      { isPending && <LoadingMessage message="Loading..."/> }
      { error && <ErrorMessage error={error.message}/>}

      {teachers && <TeacherList teachers={teachers} title="Teachers" handleDelete={handleDeleteTeacher}></TeacherList>}
      {/* <TeacherList teachers={teachers.filter((teacher) => teacher.name === 'Jason')} title="Jason" handleDelete={handleDeleteTeacher}></TeacherList> */}

    </div>
  );
}
 
export default HomePage;

