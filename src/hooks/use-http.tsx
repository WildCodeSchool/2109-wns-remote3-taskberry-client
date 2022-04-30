import { useState, useContext } from "react";
import RequestConfig, { LogRequest } from "../models/RequestConfig";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { LOGIN_USER } from "../GraphQL/API";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const sendRequest = async (requestConfig: RequestConfig) => {
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
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, expirationTime.toISOString());
      // set navigate for login
      // to do => conditional navigate for updtate password prefer display modal information and stay on profile page
      // to do => conditional navigate for signup prefer display modal information and then go on home page
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong!");
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
