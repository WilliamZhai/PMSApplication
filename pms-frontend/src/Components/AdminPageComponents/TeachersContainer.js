import './index.css';
import TeachersTable from './TeachersTable.js'

const TeachersContainer = ({teachers}) => {

  return ( 
  <div className="teachers-container">
    <h2 className="section-title"> Teachers</h2>
    <TeachersTable teachers={teachers}></TeachersTable>

  </div> );
}


 
export default TeachersContainer;