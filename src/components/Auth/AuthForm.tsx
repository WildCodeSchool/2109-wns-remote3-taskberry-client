import React, { useRef, useState } from "react";
import validate from "../../helpers/loginFormValidationRules";
import useForm from "../../hooks/use-form";
import useHttp from "../../hooks/use-http";
import AuthButton from "../Button/AuthButton";
import AuthToggleButton from "../Button/AuthToggleButton";

const AuthForm: React.FC = () => {
  const login = (): void => {
    console.log("Callback function when form is submitted!");
  };
  const {
    isLoading,
    error,
    sendLogin: signLoginRequest,
    sendRegister: registerNewUser,
    sendRequest: sendRequest,
  } = useHttp();

  const {
    values,
    errors,
    data,
    handleChange,
    handleSubmit: handleSubmitValidate,
  } = useForm(login, validate);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const profileImageInputRef = useRef<HTMLInputElement>(null);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState<string>("");

  const saveFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event && event.target.files) {
      setFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
    }
  };

  const switchAuthModeHandler = (): void => {
    setIsLogin((prevState) => !prevState);
  };

  // 1-Login
  // clear whitespace
  // set error paragraph css
  // disable button if errors
  // enable is not
  // condition in hooks useform is error set modal / if not submit ok
  // set modal in hooks http if error if not ras
  // eye
  // memorylogin

  // 2-SignUp
  // need to set names fields
  // validate 2xpassword / dotenv / need to set errorModal and infoModal

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    handleSubmitValidate(event);

    const enteredEmail: string = emailInputRef.current!.value;
    const enteredPassword: string = passwordInputRef.current!.value;
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      login();
      let url;
      if (isLogin) {
        if (data && data.length === 0) {
          url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCU6TjWTOafIRK2LwxNhVJ91WZYUX1PyRc`;
          sendRequest({
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
        } else
          signLoginRequest({
            variables: {
              email: values.email,
              password: values.password,
              token: data.loginUser,
              expiresIn: "3600",
            },
          });
      } else {
        const enteredFirstName: string = firstNameInputRef.current!.value;
        const enteredLastName: string = lastNameInputRef.current!.value;
        const enteredProfilePicture: string =
          profileImageInputRef.current!.value;
        registerNewUser({
          variables: {
            userInput: {
              profilePicture: fileName,
              firstName: enteredFirstName,
              lastName: enteredLastName,
              email: enteredEmail,
              password: enteredPassword,
            },
          },
        });
      }
    } else {
      alert("There is an Error!");
      console.log("errors", errors);
    }
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
          placeholder="nom"
          ref={lastNameInputRef}
          required
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
          placeholder="prénom"
          ref={firstNameInputRef}
          required
        />
      </div>
    </div>
  );

  const uploadProfileFile = !isLogin && (
    <div className="mb-2">
      <label className="block text-white font-bold mb-2" htmlFor="password">
        Profil image
      </label>
      <input
        className="bg-gray-50 text-purple rounded-md border-white border-solid w-full text-left p-1"
        type="file"
        id="profileImage"
        placeholder="image"
        ref={profileImageInputRef}
        onChange={saveFile}
        // required
      />
      {/* <button onClick={uploadFile}>Upload</button> */}
    </div>
  );

  let content;

  if (error) {
    content = <h2>No account found. Start adding some!</h2>;
  }

  if (isLoading) {
    content = "Loading tasks...";
  }

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
            autoComplete="off"
            type="email"
            name="email"
            value={values.email || ""}
            id="email"
            placeholder="email"
            onChange={handleChange}
            required
            ref={emailInputRef}
          />
          {errors.email && <p className="help is-danger">{errors.email}</p>}
        </div>
        <div className="mb-2">
          <label className="block text-white font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="bg-gray-50 text-purple rounded-md border-white border-solid w-full text-left p-1"
            autoComplete="off"
            type="password"
            name="password"
            value={values.password || ""}
            id="password"
            placeholder="password"
            onChange={handleChange}
            required
            ref={passwordInputRef}
          />
          {errors.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </div>
        {uploadProfileFile}
        <div className="mt-6 flex flex-col items-center">
          <AuthButton isLogin={isLogin} isLoading={isLoading} />
          <AuthToggleButton
            switchAuthModeHandler={switchAuthModeHandler}
            isLogin={isLogin}
          />
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
