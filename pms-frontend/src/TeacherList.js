import { Link } from "react-router-dom"

const TeacherList = ({teachers, title, handleDelete}) => {

  return (  
    <div className="teacher-list">
      <h2> {title} </h2>
      {teachers.map((teacher) => (
        <div className="teacher-element-preview" key={teacher.id}>
          <Link to={`/teachers/${teacher.id}`}>
            <h2>{ teacher.name }</h2>
            <p> Email: { teacher.email }</p>
          </Link>
          
          <button onClick={() => handleDelete(teacher.id)}> Remove </button>
        </div>
      ))}
    </div>
  );
}
 
export default TeacherList;