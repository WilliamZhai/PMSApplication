import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../Utilities/ErrorMessage";
import LoadingMessage from "../Utilities/LoadingMessage";
import InfoMessage from "../Utilities/InfoMessage";

import usePost from "../../api/usePost";

import './index.css'

const CreateTeacherForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [classes, setClass] = useState('');
  const [teacherAddedName, setTeacherAddedName] = useState('')
  
  const {executePost, data, isPending, error, success } = usePost("employees");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTeacher = {name, email, classes}

    const options = {
      method: 'POST',
      body: JSON.stringify(newTeacher),
      headers: { "Content-Type": "application/json"}
    }

    executePost(options).then(response => {
      // console.log("RESPONSE: ", response)
    })

    setTeacherAddedName(name);
    setName('');
    setEmail('');
    setClass('');
  }

  return (  
    <div>
      { isPending && <LoadingMessage message="Loading..."/> }
      { error && <ErrorMessage error={error.message}/>}
      { success && <InfoMessage message={"Teacher added - " + teacherAddedName }></InfoMessage>}
      <div className="create-teacher">
        <h2>Add a New Teacher</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>classes</label>
          <select
            value={classes}
            onChange={(e) => setClass(e.target.value)}
          >
            <option value=""> </option>
            <option value="G4"> G4</option>
            <option value="G5"> G5</option>
            <option value="G6"> G6</option>
          </select>
          { !isPending && <button>Add Teacher</button>}
          { isPending && <button disabled> Adding Teacher</button>}
          
        </form>
      </div>
    </div>
  );
}
 
export default CreateTeacherForm;
