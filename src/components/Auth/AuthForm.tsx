import { useState } from "react";
import AuthButton from "../Button/AuthButton";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const createAccountFields = !isLogin && (
    <div>
      <div className={classes.control}>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" required />
      </div>
      <div className={classes.control}>
        <label htmlFor="surname">Prénom</label>
        <input type="text" id="surname" required />
      </div>
    </div>
  );

  const confirmPasswordField = !isLogin && (
    <div className={classes.control}>
      <label htmlFor="password">Confirmation mot de passe</label>
      <input type="password" id="confirmPassword" required />
    </div>
  );

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Se connecter" : "S'inscrire"}</h1>
      <form>
        {createAccountFields}
        <div className={classes.control}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" required />
        </div>
        {confirmPasswordField}
        <div className={classes.actions}>
          <AuthButton logged={isLogin} />
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "S'inscrire" : "Déjà un compte ? Connectez-vous"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
