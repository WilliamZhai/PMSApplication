import TeachersContainer from "../Components/AdminPageComponents/TeachersContainer";
import LoadingMessage from "../Components/Utilities/LoadingMessage";
import ErrorMessage from "../Components/Utilities/ErrorMessage";

import useFetch from "../api/useFetch";
import api from '../api/teachers';
import { useEffect, useState } from "react";

const AdministrationPage = () => {
  const {REACT_APP_SERVER_URL} = process.env;
  const {data:teachers, isPending, error} = useFetch(REACT_APP_SERVER_URL);

  const [teachers2, setTeachers2] = useState([]);
  
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await api.get('/employees');
        setTeachers2(response.data)
      } catch (err) {
        if (err.response) {
          // response not in 200 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          // no response at all
          console.log(`Error: ${err.message}`);
        }   
        
      }
    }
    fetchTeachers();
  }, [])

  return (  
    <div className="administration">
      {/* { isPending && <LoadingMessage message="Loading..."/> }
      { error && <ErrorMessage error={error.message}/>}
      { teachers && <TeachersContainer teachers={teachers}/>} */}
      
      {teachers2 && <TeachersContainer teachers={teachers2}/>}
    </div>
  );
}
 
export default AdministrationPage;