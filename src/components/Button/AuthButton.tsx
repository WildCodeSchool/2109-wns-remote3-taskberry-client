interface AuthButtonProps {
  logged?: boolean;
}

const AuthButton = (props: AuthButtonProps) => {
  const { logged } = props;
  return <button>{logged ? "Se connecter" : "S'inscrire"}</button>;
};

export default AuthButton;
