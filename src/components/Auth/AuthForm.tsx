import { useState, useRef } from "react";
import useHttp from "../../hooks/use-http";
import AuthButton from "../Button/AuthButton";
import AuthToggleButton from "../Button/AuthToggleButton";
import validate from "../../helpers/loginFormValidationRules";
import useForm from "../../hooks/use-form";
import { omit } from "lodash";

const AuthForm = () => {
  // hooks 1/2/3
  const login = (): void => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };
  const { isLoading, error, sendRequest: signLoginRequest } = useHttp();

  // hooks 1
  // const {
  //   values,
  //   errors,
  //   handleChange,
  //   handleSubmit: handleSubmitValidate,
  // } = useForm(login, validate);

  // hooks 2
  // const {
  //   handleChange,
  //   values,
  //   errors,
  //   handleSubmit: handleSubmitValidate,
  // } = useForm(login);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  // hooks 3
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState<any>({});

  const switchAuthModeHandler = (): void => {
    setIsLogin((prevState) => !prevState);
  };

  // hooks 3
  const validate = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    value: string
  ) => {
    switch (name) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          const newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          const newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

   // hooks 3
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const name = event.target.name;
    const val = event.target.value;
    validate(event, name, val);
    setValues({
      ...values,
      [name]: val,
    });
  };

  // need to validate / validate 2xpassword / dotenv / memorylogin / need to set errorModal and infoModal / need to set names fields / eye
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    // handleSubmitValidate(event);
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      login();
    } else {
      alert("There is an Error!");
    }
    console.log("values", values);
    console.log("errors", errors);
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
            autoComplete="off"
            type="email"
            name="email"
            // value={values.email || ""}
            id="email"
            placeholder="E-mail"
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
            // value={values.password || ""}
            id="password"
            placeholder="E-mail"
            onChange={handleChange}
            required
            ref={passwordInputRef}
          />
          {errors.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </div>
        {confirmPasswordField}
        <div className="mt-6 flex flex-col items-center">
          <AuthButton logged={isLogin} isLoading={isLoading} />
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
