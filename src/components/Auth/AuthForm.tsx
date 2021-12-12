import { useState, useRef } from "react";
import useHttp from "../../hooks/use-http";
import AuthButton from "../Button/AuthButton";
import AuthToggleButton from "../Button/AuthToggleButton";

const AuthForm = () => {
  const { isLoading, error, sendRequest: signLoginRequest } = useHttp();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const switchAuthModeHandler = (): void => {
    setIsLogin((prevState) => !prevState);
  };

  // need to validate / validate 2xpassword / dotenv / memorylogin / need to set errorModal and infoModal / need to set names fields
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredEmail: string = emailInputRef.current!.value;
    const enteredPassword: string = passwordInputRef.current!.value;
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCU6TjWTOafIRK2LwxNhVJ91WZYUX1PyRc`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCU6TjWTOafIRK2LwxNhVJ91WZYUX1PyRc`;
    }
    signLoginRequest({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
    });
  };

  const createAccountFields = !isLogin && (
    <div>
      <div className="mb-2">
        <label className="block text-white font-bold mb-2" htmlFor="name">
          Nom
        </label>
        <input
          className="bg-gray-50 text-purple rounded-md border-white border-solid w-full text-left p-1"
          type="text"
          id="name"
          // required
        />
      </div>
      <div className="mb-2">
        <label className="block text-white font-bold mb-2" htmlFor="surname">
          Prénom
        </label>
        <input
          className="bg-gray-50 text-purple rounded-md border-white border-solid w-full text-left p-1"
          type="text"
          id="surname"
          // required
        />
      </div>
    </div>
  );

  const confirmPasswordField = !isLogin && (
    <div className="mb-2">
      <label className="block text-white font-bold mb-2" htmlFor="password">
        Confirmation mot de passe
      </label>
      <input
        className="bg-gray-50 text-purple rounded-md border-white border-solid w-full text-left p-1"
        type="password"
        id="confirmPassword"
        // required
      />
    </div>
  );

  return (
    <section className="my-12 m-auto w-11/12 max-w-max rounded-md bg-purple-medium shadow-md p-4 text-center">
      <h1 className="text-center text-white p-4 ">
        {isLogin ? "Se connecter" : "S'inscrire"}
      </h1>
      <form onSubmit={submitHandler}>
        {createAccountFields}
        <div className="mb-2">
          <label className="block text-white font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="bg-gray-50 text-purple rounded-md border-white border-solid w-full text-left p-1"
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="mb-2">
          <label className="block text-white font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="bg-gray-50 text-purple rounded-md border-white border-solid w-full text-left p-1"
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        {confirmPasswordField}
        <div className="mt-6 flex flex-col items-center">
          <AuthButton logged={isLogin} load={isLoading} />
          <AuthToggleButton
            switchAuthModeHandler={switchAuthModeHandler}
            logged={isLogin}
          />
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
