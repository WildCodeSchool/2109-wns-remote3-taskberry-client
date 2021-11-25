import { Link } from "react-router-dom";

const MainNavigation: React.FC = () => {
  return (
    <header data-test="main-navigation-content">
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
