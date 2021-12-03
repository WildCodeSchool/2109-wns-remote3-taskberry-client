interface AuthToggleButtonProps {
  logged?: boolean;
  switchAuthModeHandler: () => void;
}
const AuthToggleButton = (props: AuthToggleButtonProps) => {
  const { logged, switchAuthModeHandler } = props;
  return (
    <button
      type="button"
      className="mt-4 bg-transparent text-purple-600 border-none py-0.5 px-6 hover:bg-transparent hover:text-pink-600"
      onClick={switchAuthModeHandler}
    >
      {logged ? "S'inscrire" : "Déjà un compte ? Connectez-vous"}
    </button>
  );
};

export default AuthToggleButton;
