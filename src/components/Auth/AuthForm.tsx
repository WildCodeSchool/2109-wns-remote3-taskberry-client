import { useState } from "react";
import AuthButton from "../Button/AuthButton";
import AuthToggleButton from "../Button/AuthToggleButton";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
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
          required
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
        required
      />
    </div>
  );

  return (
    <section className="m-12 w-11/12 max-w-md rounded-md bg-purple-medium shadow-md p-4 text-center">
      <h1 className="text-center text-white p-4 ">
        {isLogin ? "Se connecter" : "S'inscrire"}
      </h1>
      <form>
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
          />
        </div>
        {confirmPasswordField}
        <div className="mt-6 flex flex-col items-center">
          <AuthButton logged={isLogin} />
          <AuthToggleButton switchAuthModeHandler={switchAuthModeHandler} />
          {/* <button
            type="button"
            className="mt-4 bg-transparent text-purple-600 border-none py-0.5 px-6 hover:bg-transparent hover:text-pink-600"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "S'inscrire" : "Déjà un compte ? Connectez-vous"}
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
