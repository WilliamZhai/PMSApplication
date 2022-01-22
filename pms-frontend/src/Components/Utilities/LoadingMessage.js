import './AlertStyles.css'
import { Alert } from "react-bootstrap";

const LoadingMessage = ({message}) => {
  return ( 
    <Alert variant="info" className='error-message-text'>
      Info: {message}
    </Alert>
  );
}
 
export default LoadingMessage;