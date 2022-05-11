import { useState, useCallback } from "react";

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (props) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetch(props.url, {
          method: props.method ? props.method : "GET",
          headers: props.headers ? props.headers : {},
          body: props.body ? JSON.stringify(props.body) : null,
        });
        if (!result.ok) {
          throw new Error("Request failed");
        }
        const data = await result.json();
        applyData(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }

      setIsLoading(false);
    },
    [setIsLoading, setError, applyData]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
