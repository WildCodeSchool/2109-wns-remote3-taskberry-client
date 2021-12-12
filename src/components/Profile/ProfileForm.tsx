import { useRef, useContext } from "react";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../store/auth-context";

const ProfileForm: React.FC = () => {
  const { isLoading, error, sendRequest: changePasswordRequest } = useHttp();
  const newPasswordInputRef = useRef<HTMLInputElement>(null);
  const authCtx = useContext(AuthContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredNewPassword: string = newPasswordInputRef.current!.value;
    const isLoggedIn = authCtx.isLoggedIn;
    // add validation
    let url;

    if (isLoggedIn) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCU6TjWTOafIRK2LwxNhVJ91WZYUX1PyRc`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCU6TjWTOafIRK2LwxNhVJ91WZYUX1PyRc`;
    }
    changePasswordRequest({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      },
    });
  };

  return (
    <form className="w-11/12 max-w-sm my-8 m-auto" onSubmit={submitHandler}>
      <div className="mb-8">
        <label
          className="mb-8 font-bold text-gray-900 block "
          htmlFor="new-password"
        >
          New Password
        </label>
        <input
          className="block w-full rounded-lg p-1 border-2 border-purple-900 border-solid bg-white text-black"
          type="password"
          id="new-password"
          // minLength={"7"}
          ref={newPasswordInputRef}
        />
      </div>
      <div className="mt-6">
        <button className="cursor-pointer rounded-lg border-purple-900 bg-purple-medium text-white py-2 px-6 hover:text-pink-300 hover:border-pink-900 ">
          Change Password
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
