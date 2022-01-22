import './ErrorMessage.css'

const ErrorMessage = ({error}) => {
  console.log(error)
  return (  
    <div className='error-message-container'>
      <h3 className="error-message-text"> Error: {error.message} </h3> 
    </div>
  );
}
 
export default ErrorMessage;