import './index.css';
import CoursesTable from './CoursesTable.js'

const CoursesContainer = ({courses}) => {

  return ( 
  <div className="section-container">
    <h2 className="section-title"> Courses</h2>
    <CoursesTable courses={courses}></CoursesTable>

  </div> );
}


 
export default CoursesContainer;