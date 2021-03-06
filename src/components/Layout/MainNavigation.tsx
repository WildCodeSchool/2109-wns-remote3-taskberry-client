import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const MainNavigation: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header
      className="w-full h-20 bg-purple-medium shadow-2xl flex justify-between items-center py-0 px-32"
      data-test="main-navigation-content"
    >
      <Link to="/">
        <img
          className="w-[110px] h-[80px] m-0 "
          src="/images/Berry.png"
          alt="logo"
        />
      </Link>
      <nav>
        <ul className="list-none m-0 p-0 flex items-baseline">
          {!isLoggedIn && (
            <li className="mx-4 my-0">
              <Link
                className="no-underline text-white font-bold hover:text-pink-300"
                to="/auth"
              >
                Login
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="mx-4 my-0">
              <Link
                className="no-underline text-white font-bold hover:text-pink-300"
                to="/profile"
              >
                Profile
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="mx-4 my-0">
              <button
                className="bg-transparent hover:bg-purple-400 hover:text-purple-800 text-white font-bold cursor-pointer py-2 px-6 border-solid border-4 rounded-lg"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
