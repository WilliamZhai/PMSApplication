import {Table} from 'react-bootstrap'

const TeachersTable = ({teachers}) => {

  return ( 
    <div className="teachers-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
 
export default TeachersTable;