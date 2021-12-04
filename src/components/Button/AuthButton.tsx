interface AuthButtonProps {
  logged?: boolean;
  load?: boolean;
}

const AuthButton = (props: AuthButtonProps) => {
  const { logged, load } = props;
  return (
    <div>
      {!load && (
        <button className="cursor-pointer text-white bg-purple-400 border-purple-400 border-solid rounded-md py-2 px-10 hover:bg-pink-400 hover:border-pink-400">
          {logged ? "Se connecter" : "S'inscrire"}
        </button>
      )}
      {load && <p>Sending request ...</p>}
    </div>
  );
};

export default AuthButton;
