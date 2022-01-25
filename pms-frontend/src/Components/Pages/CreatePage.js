import CreateTeacher from "../CreatePageComponents/CreateTeacher";
import { Tabs,Tab } from "react-bootstrap";
import { useState } from "react";

import './Pages.css'

const CreatePage = () => {
  const [key, setKey] = useState('teacher');

  return ( 
  <div className="create">
    <div className="tabs-container">
      <Tabs 
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="tabs-container"
      >
        <Tab className="tab" eventKey="create" title="create" disabled>
        </Tab>
        <Tab className="tab" eventKey="teacher" title="teacher">
        </Tab>
        <Tab className="tab" eventKey="class" title="class">
        </Tab>
        <Tab className="tab" eventKey="user" title="user" disabled>
        </Tab>
      </Tabs>
    </div>
    
    {/* Display form based on selected tab */}
    {key==="teacher" && <CreateTeacher></CreateTeacher>}


  </div> 
  );
}
 
export default CreatePage;