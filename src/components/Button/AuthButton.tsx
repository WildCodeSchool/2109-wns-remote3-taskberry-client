interface AuthButtonProps {
  isLogin?: boolean;
  isLoading?: boolean;
}

const AuthButton = (props: AuthButtonProps) => {
  const { isLogin, isLoading } = props;
  return (
    <div>
      {!isLoading && (
        <button
          className="cursor-pointer text-white bg-purple-400 border-purple-400 border-solid rounded-md py-2 px-10 hover:bg-pink-400 hover:border-pink-400"
          // add conditionnal : if error => disable if not enable / add css
          // disabled={errors ? true : false}
        >
          {isLogin ? "Se connecter" : "S'inscrire"}
        </button>
      )}
      {isLoading && <p>Sending request ...</p>}
    </div>
  );
};

export default AuthButton;
