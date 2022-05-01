import { useState, useContext } from "react";
import RequestConfig, { LogRequest } from "../models/RequestConfig";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER, LOGIN_USER } from "../GraphQL/API";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [createUser, { data: userCreated, loading }] = useMutation(CREATE_USER);

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

  const sendRegister = async (requestConfig: LogRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      createUser({
        variables: {
          userInput: {
            profilePicture: requestConfig.variables.userInput.profilePicture,
            firstName: requestConfig.variables.userInput.firstName,
            lastName: requestConfig.variables.userInput.lastName,
            email: requestConfig.variables.userInput.email,
            password: requestConfig.variables.userInput.password,
          },
        },
      });
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong!");
        alert(err.message);
      }
    }
    setIsLoading(false);
  };

  // const sendLogin = async (requestConfig: LogRequest) => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     logUse(LOGIN_USER, {
  //       variables: {
  //         email: requestConfig.variables.userInput.email,
  //         password: requestConfig.variables.userInput.password,
  //       },
  //       // pollInterval: 500,
  //     });
  //     navigate("/");
  //   console.log(logdata)
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       setError(err.message || "Something went wrong!");
  //       alert(err.message);
  //     }
  //   }
  //   setIsLoading(false);
  // };

  return {
    isLoading: isLoading,
    error: error,
    sendRequest,
    sendRegister,
  };
};

export default useHttp;
