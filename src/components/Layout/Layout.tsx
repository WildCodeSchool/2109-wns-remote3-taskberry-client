import { Fragment, ReactFragment, ReactNode } from "react";
import { RouteProps } from "react-router";
import MainNavigation from "./MainNavigation";

interface PropsInterface {
    children: any;
  }

const Layout: React.FC<PropsInterface> = (props: PropsInterface) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
