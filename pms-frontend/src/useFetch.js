import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, {method: 'GET', signal: abortCont.signal})
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch data for the resource');
        }
        return res.json();
      })
      .then((result) => {
          setIsPending(false);
          setError(null)
          setData(result);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(error.message);
        }
      })

    return () => {
      abortCont.abort();
    }
  }, [url]);

  return {data, isPending, error};
}


export default useFetch;