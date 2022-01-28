import {Table} from 'react-bootstrap'

const CoursesTable = ({courses}) => {

  return ( 
    <div className="courses-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.employee && course.employee.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
 
export default CoursesTable;