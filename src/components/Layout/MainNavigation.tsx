import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <Link to="/">
        <div>TaskBerry Auth</div>
      </Link>
    </header>
  );
};

export default MainNavigation;
