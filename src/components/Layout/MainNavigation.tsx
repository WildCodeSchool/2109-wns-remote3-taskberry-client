import { Link } from "react-router-dom";

const MainNavigation : React.FC = () => {
  return (
    <header data-test="main-navigation-content">
      <Link to="/">
<<<<<<< HEAD
        <div>TaskBerry Auth</div>
        <img src="/images/TaskBerry.png" alt="logo" />
=======
        <img
          className="w-[110px] h-[80px] border-solid border-1 border-red-500 m-0 "
          src="/images/Berry.png"
          alt="logo"
        />
>>>>>>> WIP: css
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
<<<<<<< HEAD
=======

{
  /* <button className="text-white-200 border-solid border-1 border-white-800 font-bold px-2 py-6 rounded-sm cursor-pointer"> */
}
>>>>>>> WIP: css
