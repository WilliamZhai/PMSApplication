import './LoadingMessage.css'

const LoadingMessage = ({message}) => {
  return (  
    <div className='loading-message-container'>
      <h3 className="loading-message-text"> {message} </h3> 
    </div>
  );
}
 
export default LoadingMessage;