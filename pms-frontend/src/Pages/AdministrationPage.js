import TeachersContainer from "../Components/AdminPageComponents/TeachersContainer";
import LoadingMessage from "../Components/Utilities/LoadingMessage";
import ErrorMessage from "../Components/Utilities/ErrorMessage";

import useFetch from "../api/useFetch";

const AdministrationPage = () => {
  const {REACT_APP_SERVER_URL} = process.env;
  const {data:teachers, isPending, error} = useFetch(REACT_APP_SERVER_URL);

  return (  
    <div className="administration">
      { isPending && <LoadingMessage message="Loading..."/> }
      { error && <ErrorMessage error={error.message}/>}
      { teachers && <TeachersContainer teachers={teachers}/>}
    </div>
  );
}
 
export default AdministrationPage;