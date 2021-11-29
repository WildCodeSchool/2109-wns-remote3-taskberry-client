interface AuthButtonProps {
  logged?: boolean;
}

const AuthButton = (props: AuthButtonProps) => {
  const { logged } = props;
  return (
    <button className="cursor-pointer text-white bg-purple-400 border-purple-400 border-solid rounded-md py-2 px-10 hover:bg-pink-400 hover:border-pink-400">
      {logged ? "Se connecter" : "S'inscrire"}
    </button>
  );
};

export default AuthButton;
