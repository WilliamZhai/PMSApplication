import { Table } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'

const TeachersTable = ({teachers}) => {

  const handleDelete = (id) => {
    console.log("delete: " + id);
  }

  return ( 
    <div className="teachers-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>
                <FaTrashAlt 
                  onClick={() => handleDelete(teacher.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
 
export default TeachersTable;