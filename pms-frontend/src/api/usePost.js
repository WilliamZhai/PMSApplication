import { useState, useCallback } from "react";

const {REACT_APP_SERVER_API_BASE_URL} = process.env;

const usePost = (resource_url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const url = REACT_APP_SERVER_API_BASE_URL + resource_url

  const executePost = useCallback(
    async ( options ) => {
      setIsPending(true);
      setError(null);
      setSuccess(false);
      return await fetch(url, options)
        .then(response => {
          return response
        })
        .then(response => {
          setSuccess(true);
          setData(response);
          return response;
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => setIsPending(false));
    },
    [resource_url, setIsPending, setError]
  );

  return { executePost, data, isPending, error, success };
}


export default usePost;