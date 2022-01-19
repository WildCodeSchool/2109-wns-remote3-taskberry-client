import React, { useState, useEffect, useCallback } from "react";

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

// look into localStorage and get token from there only if the token is valid, delete if it's not the case
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const remainingTime = calculateRemainingTime(storedExpirationDate);

  // check if token is valid with a remaining time < 1 minute
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

  // dependancy array is empty because functions inside logoutHandler are not specific to React app or to this component function
  // localStorage and clearTimout are browser builts-in functions
  // setToken function never changes (guaranted by React)
  // logoutTimer is a global variable outside of React rendering flow
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token: string, expirationTime: string) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log("tokenData.duration", tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

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
