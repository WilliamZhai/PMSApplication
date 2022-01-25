import TeachersContainer from "../AdminPageComponents/TeachersContainer";
import useFetch from "../../api/useFetch";
import LoadingMessage from "../Utilities/LoadingMessage";
import ErrorMessage from "../Utilities/ErrorMessage";

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