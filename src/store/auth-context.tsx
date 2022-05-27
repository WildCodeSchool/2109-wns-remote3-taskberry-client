import React, { useState, useEffect, useCallback } from "react";

let logoutTimer: ReturnType<typeof setTimeout>;

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

type AuthContextObj = {
  token: string | null | undefined;
  isLoggedIn: boolean;
  logout: () => void;
  login: (token: string, expirationTime: string) => void;
  updatedUserLogged: (userData: User) => void;
  userData: User;
};

const AuthContext = React.createContext<AuthContextObj>({
  token: "",
  isLoggedIn: false,
  login: (token: string, expirationTime: string) => {},
  logout: () => {},
  updatedUserLogged: (userData: User) => {},
  userData: { id: "", email: "", firstName: "", lastName: "" },
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

const retrievedStoredUserData = () => {
  const storedUserId = localStorage.getItem("userId");
  const storedUserEmail = localStorage.getItem("userEmail");
  const storedUserFirstName = localStorage.getItem("userFirstName");
  const storedUserLastName = localStorage.getItem("userLastName");
  return {
    userData: {
      id: storedUserId,
      email: storedUserEmail,
      firstName: storedUserFirstName,
      lastName: storedUserLastName,
    },
  };
};
export const AuthContextProvider: React.FC = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const { userData } = retrievedStoredUserData();
  console.log("testDatainAuth", userData);
  let initialUserEmail;
  let initialUserId;
  let initialUserFirstName;
  let initialUserLastName;
  if (userData) {
    initialUserEmail = userData.email;
    initialUserId = userData.id;
    initialUserFirstName = userData.firstName;
    initialUserLastName = userData.lastName;
  }
  const [token, setToken] = useState<string | null | undefined>(initialToken);
  const [userLogged, setUserLogged] = useState<any>({
    id: initialUserId,
    email: initialUserEmail,
    firstName: initialUserFirstName,
    lastName: initialUserLastName,
  });
  console.log("userLoggedInauth", userLogged);
  const userIsLoggedIn = !!token;

  // dependancy array is empty because functions inside logoutHandler are not specific to React app or to this component function
  // localStorage and clearTimout are browser builts-in functions
  // setToken function never changes (guaranted by React)
  // logoutTimer is a global variable outside of React rendering flow
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userLastName");
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

  const userLoggedHandler = (userData: User) => {
    setUserLogged({
      ...userLogged,
      email: userData.email,
      id: userData.id,
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
    localStorage.setItem("userId", userData.id);
    localStorage.setItem("userEmail", userData.email);
    localStorage.setItem("userFirstName", userData.firstName);
    localStorage.setItem("userLastName", userData.lastName);
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
    userData: userLogged,
    updatedUserLogged: userLoggedHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
