import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../Utilities/ErrorMessage";
import LoadingMessage from "../Utilities/LoadingMessage";
import InfoMessage from "../Utilities/InfoMessage";

import usePost from "../../api/usePost";
import useFetch from "../../api/useFetch";

import './index.css'

const CreateTeacherForm = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [teacher, setTeacher] = useState('');
  const [courseAddedName, setCourseAddedName] = useState('')
  
  const {executePost, data, isPending, error, success } = usePost("courses");
  const {data:teachers} = useFetch("employees", 'GET');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {name, description, teacher}

    const options = {
      method: 'POST',
      body: JSON.stringify(newCourse),
      headers: { "Content-Type": "application/json"}
    }

    executePost(options).then(response => {
      // console.log("RESPONSE: ", response)
    })

    setCourseAddedName(name);
    setName('');
    setDescription('');
    setTeacher('');
  }

  return (  
    <div>
      { isPending && <LoadingMessage message="Loading..."/> }
      { error && <ErrorMessage error={error.message}/>}
      { success && <InfoMessage message={"Course added - " + courseAddedName }></InfoMessage>}

      <div className="create-teacher">
        <h2>Add a New Course</h2>
        <form onSubmit={handleSubmit}>
          <label>Course Name</label>
          <input 
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description</label>
          <textarea  
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea >
          <label>Teacher</label>
          <select
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          >
            <option> </option>
            {teachers && teachers.map((teacher) => (
              <option value={teacher} key={teacher.id}> {teacher.name} </option>
            ))}
          </select>
          { !isPending && <button>Add Teacher</button>}
          { isPending && <button disabled> Adding Teacher</button>}
          
        </form>
      </div>
    </div>
  );
}
 
export default CreateTeacherForm;
