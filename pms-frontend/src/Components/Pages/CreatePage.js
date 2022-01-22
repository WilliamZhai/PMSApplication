import { useState } from "react";
import { useNavigate } from "react-router-dom"

const CreatePage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [classes, setClass] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTeacher = {name, email, classes}

    setIsPending(true);
    
    fetch('http://localhost:5000/api/employees', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newTeacher)
    }).then(() =>{
      console.log("new teacher added")
      setIsPending(false)
      navigate('/')
    })

    
  }

  return (  
    <div className="create">
      <h2>Add a New Teacher</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description</label>
        <textarea 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></textarea>
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
  );
}
 
export default CreatePage;
