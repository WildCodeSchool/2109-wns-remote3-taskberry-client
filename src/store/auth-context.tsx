import React, { useState } from "react";

let logoutTimer: ReturnType<typeof setTimeout>;

type AuthContextObj = {
  token: string | null | undefined;
  isLoggedIn: boolean;
  logout: () => void;
  login: (token: string, expirationTime: string) => void;
};

const AuthContext = React.createContext<AuthContextObj>({
  token: "",
  isLoggedIn: false,
  login: (token: string, expirationTime: string) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

//look into localStorage and get token from there only if the token is valid, delete if it's not the case

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  //  const storedExpirationDate = localStorage.getItem("expirationTime");
  const temp = localStorage.getItem("expirationTime");
  const storedExpirationDate = temp ? JSON.parse(temp) : {};
  const remainingTime = calculateRemainingTime(storedExpirationDate);

  // check if token is valid with a enouth remaining time (< 1 minute)
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};
export const AuthContextProvider: React.FC = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState<string | null | undefined>(initialToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token: string, expirationTime: string) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const contextValue: AuthContextObj = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
