import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_USER } from "../GraphQL/API";
import RequestConfig, { Login, LogRequest } from "../models/RequestConfig";
import AuthContext from "../store/auth-context";
import jwt_decode from "jwt-decode";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
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

  const sendLogin = async (requestConfig: Login) => {
    setIsLoading(true);
    setError(null);
    try {
      const email = requestConfig.variables.email;
      const password = requestConfig.variables.password;
      const token = requestConfig.variables.token;
      if (!token) {
        const errorMessage = "Authentification failed";
        throw new Error(errorMessage);
      }
      const logUserData: any = jwt_decode(token);
      console.log("logUserData", logUserData);
      const expiresIn = logUserData.exp - logUserData.iat;
      const expirationTime = new Date(new Date().getTime() + +expiresIn * 1000);
      // console.log("expirationTime", expirationTime);
      // console.log("logUserData", logUserData);
      authCtx.login(token, expirationTime.toISOString());
      authCtx.updatedUserLogged(logUserData);
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
    sendLogin,
    sendRegister,
  };
};

export default useHttp;
