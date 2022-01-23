import './AlertStyles.css'
import { Alert, Spinner } from "react-bootstrap";

const LoadingMessage = ({message}) => {
  return ( 
    <Alert variant="info" className='error-message-text'>
      <span>
        Info: {message} 
      </span>
      
      <span className='spinner'>
        <Spinner animation="border" role="status" size="sm" >
          
        </Spinner>
      </span>
    </Alert>
  );
}
 
export default LoadingMessage;