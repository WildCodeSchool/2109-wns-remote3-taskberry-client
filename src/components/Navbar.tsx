import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTasks,
  faFolder,
  faUsers,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

// add our event listener for the click
btn?.addEventListener("click", () => {
  sidebar?.classList.toggle("-translate-x-full");
});
function Navbar() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div className="absolute min-h-screen sm:flex md:w-auto w-100">
      {/* mobile menu bar  */}

      <div className="bg-purple-medium min-w-screen text-purple-100 flex justify-between sm:hidden">
        {/* logo  */}

        <a href="#" className="text-white flex items-center space-x-2">
          <img className="max-h-20 bg-contain " src="./img/favicon.ico" />
        </a>

        {/* mobile menu button */}

        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* sidebar */}

      <div className="sidebar bg-purple-medium text-purple-100 text-sm w-16 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full sm:relative sm:translate-x-0 transition duration-200 ease-in-out">
        {/* logo */}
        <div>
          <a href="#" className="">
            <img src="./img/favicon.ico" />
          </a>
        </div>

        {/* nav */}
        <div className="content-center justify-center items-center flex flex-wrap h-[calc(100%-200px)] mt-0">
          <nav>
            {!isLoggedIn && (
              <Link
                className="no-underline text-white font-bold hover:text-pink-300"
                to="/auth"
              >
                <a
                  href="#"
                  className="block py-2.5 px-4 rounded transition duration-200 hover:text-white"
                >
                  <FontAwesomeIcon icon={faHome} size="2x" />
                  <p>Login</p>
                </a>
              </Link>
            )}
            {isLoggedIn && (
              <div>
                <Link
                  className="no-underline text-white py-2.5 block text-center	rounded transition duration-200 hover:text-pink-300"
                  to="/"
                >
                  <a href="#">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                    <p>Accueil</p>
                  </a>
                </Link>
                <Link
                  className="no-underline text-white py-2.5 block text-center	rounded transition duration-200 hover:text-pink-300"
                  to="/tickets"
                >
                  <a href="">
                    <FontAwesomeIcon icon={faTasks} size="2x" />
                    <p>Tickets</p>
                  </a>
                </Link>
                <Link
                  className="no-underline text-white py-2.5 block text-center	rounded transition duration-200 hover:text-pink-300"
                  to="/dashboards"
                >
                  <a href="">
                    <FontAwesomeIcon icon={faFolder} size="2x" />
                    <p>Projets</p>
                  </a>
                </Link>
                <Link
                  className="no-underline text-white py-2.5 block text-center	rounded transition duration-200 hover:text-pink-300"
                  to=""
                >
                  <a href="">
                    <FontAwesomeIcon icon={faUsers} size="2x" />
                    <p>??quipe</p>
                  </a>
                </Link>
                <Link
                  className="no-underline text-white py-2.5 block text-center	rounded transition duration-200 hover:text-pink-300"
                  to="/"
                >
                  <a href="" onClick={logoutHandler}>
                    <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                    <p>LogOut</p>
                  </a>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
