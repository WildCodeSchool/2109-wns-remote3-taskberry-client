import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTasks,
  faFolder,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

// add our event listener for the click
btn?.addEventListener("click", () => {
  sidebar?.classList.toggle("-translate-x-full");
});
function Navbar() {
  return (
    <div className="relative min-h-screen sm:flex">
      {/* mobile menu bar  */}

      <div className="bg-purple-medium text-purple-100 flex justify-between sm:hidden">
        {/* logo  */}

        <a href="#" className="text-white flex items-center space-x-2">
          <img className="max-h-24" src="./img/favicon.ico" />
        </a>

        {/* mobile menu button */}

        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg
            className="h-5 w-5"
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

      <div className="sidebar bg-purple-medium text-purple-100 w-24 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full sm:relative sm:translate-x-0 transition duration-200 ease-in-out content-center justify-center flex flex-wrap">
        {/* logo */}

        <a href="#" className="text-white absolute">
          <img src="./img/favicon.ico" />
        </a>

        {/* nav */}
        <nav>
          <a
            href="#"
            className="block py-2.5 px-4 rounded transition duration-200 hover:text-white"
          >
            <FontAwesomeIcon icon={faHome} size="3x" />
            <p>Accueil</p>
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:text-white"
          >
            <FontAwesomeIcon icon={faTasks} size="3x" />
            <p>Tickets</p>
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:text-white"
          >
            <FontAwesomeIcon icon={faFolder} size="3x" />
            <p>Projets</p>
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:text-white"
          >
            <FontAwesomeIcon icon={faUsers} size="3x" />
            <p>Equipe</p>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
