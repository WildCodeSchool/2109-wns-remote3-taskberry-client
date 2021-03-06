import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Navbar from "../Navbar";

interface PropsInterface {
  children: React.ReactNode;
}

const Layout: React.FC<PropsInterface> = (props: PropsInterface) => {
  return (
    <Fragment>
      {/* <MainNavigation /> */}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
