import './AlertStyles.css'
import { Alert } from "react-bootstrap";

const InfoMessage = ({message}) => {
  return ( 
    <Alert variant="info" className='info-message-text'>
      <span>
        Info: {message} 
      </span>
    </Alert>
  );
}
 
export default InfoMessage;