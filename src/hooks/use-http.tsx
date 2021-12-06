import { useState } from "react";

interface RequestConfig {
  url: string;
  method: string;
  headers: any;
  body?: any;
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = async (requestConfig: RequestConfig) => {
    console.log("tata");
    setIsLoading(true);
    console.log(isLoading);
    setError(null);
    console.log(error);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
      });

      if (!response.ok) {
        const errorMessage = "Authentification failed";
        throw new Error(errorMessage);
      }
      const data = await response.json();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong!");
        console.log(error);
        alert(err.message);
      }
    }
    setIsLoading(false);
  };
  return {
    isLoading: isLoading,
    error: error,
    sendRequest,
  };
};

export default useHttp;
