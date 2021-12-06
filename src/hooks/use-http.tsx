import { useState } from "react";

interface RequestConfig {
  url: string;
  method: string;
  headers: any;
  body: unknown;
}

const useHttp = (requestConfig: RequestConfig) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

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
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
