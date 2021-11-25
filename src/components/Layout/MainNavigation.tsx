import { Link } from "react-router-dom";
// import classes from './MainNavigation.module.css';

const MainNavigation : React.FC = () => {
  return (
    <header className="w-screen h-20 bg-purple-600" data-test="main-navigation-content" >
      <Link to="/">
        <div>TaskBerry Auth</div>
        <img src="/images/TaskBerry.png" alt="logo" />
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
