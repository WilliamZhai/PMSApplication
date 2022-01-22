import { useState } from "react"
import { useNavigate } from "react-router-dom";
import TeacherList from "./TeacherList";
import useFetch from "./useFetch";


const Home = () => {
  const navigate = useNavigate();
  const title = "Home Page"
  const {data:teachers, isPending, error} = useFetch("http://localhost:5000/api/employees");

  const [date, setDate] = useState("today");
  const [name, setName] = useState("name");

  const handleClick = () => {
    setDate("tomorrow")
    setName("lily")
  }

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
      <p>Date: {date}</p>
      <p>Name: {name}</p>
      <button onClick={handleClick}>Create</button>

      { isPending && <h2>Loading...</h2>}
      { error && <h2>Error: {error}</h2>}

      {teachers && <TeacherList teachers={teachers} title="Teachers" handleDelete={handleDeleteTeacher}></TeacherList>}
      {/* <TeacherList teachers={teachers.filter((teacher) => teacher.name === 'Jason')} title="Jason" handleDelete={handleDeleteTeacher}></TeacherList> */}

    </div>
  );
}
 
export default Home;

