import './AlertStyles.css'
import { Alert } from "react-bootstrap";

const ErrorMessage = ({error}) => {
  return (  
    <Alert variant="danger" className='error-message-text'>
      Error: {error}
    </Alert>  
  );
}
 
export default ErrorMessage;