import TeachersContainer from "../Components/AdminPageComponents/TeachersContainer";
import CoursesContainer from "../Components/AdminPageComponents/CoursesContainer";

import LoadingMessage from "../Components/Utilities/LoadingMessage";
import ErrorMessage from "../Components/Utilities/ErrorMessage";

import useFetch from "../api/useFetch";


const AdministrationPage = () => {
  const {data:teachers, isPending, error} = useFetch("employees", 'GET');
  const {data:courses, isPending:isPending2, error:error2} = useFetch("courses", 'GET');

  return (  
    <div className="administration">
      { isPending && <LoadingMessage message="Loading..."/> }
      { error && <ErrorMessage error={error.message}/>}
      { teachers && <TeachersContainer teachers={teachers}/>}

      { isPending2 && <LoadingMessage message="Loading..."/> }
      { error2 && <ErrorMessage error={error2.message}/>}
      { courses && <CoursesContainer courses={courses}/>}
    </div>
  );
}
 
export default AdministrationPage;