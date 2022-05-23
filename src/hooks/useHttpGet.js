import { useState, useCallback } from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import { protectedResources } from "../authConfig";
const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [token, setToken] = useState(null);
  const { instance, accounts} = useMsal();
  const account = useAccount(accounts[0] || {});

  const sendRequest = useCallback(
    async (props) => {
      setIsLoading(true);
      setError(null);

      const getInstance = async() => 
      {
       var token = await instance
        .acquireTokenSilent({
          scopes: protectedResources.apiHello.scopes,
          account: account,
        })

        return token.accessToken;
      }
      try {
        let result;
        if (account != null){
          
          const token = await getInstance();
          result = await fetch(props.url, {
            method: props.method ? props.method : "GET",
            headers: props.headers ? props.headers :  {
                   "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                 },
            body: props.body ? JSON.stringify(props.body) : null,
          });
        }
        else {
          
          result = await fetch(props.url, {
            method: props.method ? props.method : "GET",
            headers: props.headers ? props.headers :  {},
            body: props.body ? JSON.stringify(props.body) : null,
          });
        }
        if (!result.ok) {
          throw new Error("Request failed");
        }
        const data = await result.json();
        console.log(data);
        applyData(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }

      setIsLoading(false);
    },
    [setIsLoading, setError, applyData, account, instance]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
