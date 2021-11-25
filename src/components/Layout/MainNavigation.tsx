import { Link } from "react-router-dom";
// import classes from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {
  return (
    <header
      className="w-full h-20 bg-purple-600 shadow-2xl flex justify-between items-center py-0 px-32"
      data-test="main-navigation-content"
    >
      <Link to="/">
        <img
          className="w-[262px] h-[218px] border-solid border-4 border-red-500 m-0 "
          src="/images/TaskBerry.png"
          alt="logo"
        />
      </Link>
      <nav>
        <ul className="list-none m-0 p-0 flex items-baseline">
          <li className="mx-4 my-0">
            <Link
              className="no-underline text-white font-bold hover:text-pink-300"
              to="/auth"
            >
              Login
            </Link>
          </li>
          <li className="mx-4 my-0">
            <Link
              className="no-underline text-white font-bold hover:text-pink-300"
              to="/profile"
            >
              Profile
            </Link>
          </li>
          <li className="mx-4 my-0">
            <button className="bg-transparent hover:bg-purple-400 hover:text-purple-800 text-white font-bold cursor-pointer py-2 px-6 border-solid border-4 rounded-lg">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

{
  /* <button className="text-white-200 border-solid border-1 border-white-800 font-bold px-2 py-6 rounded-sm cursor-pointer"> */
}