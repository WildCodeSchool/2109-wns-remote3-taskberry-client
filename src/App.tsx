import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import ProjectBoard from "./pages/ProjectBoard";
import AuthContext from "./store/auth-context";
import Dashboard from "./pages/Dashboard";
import Dashbord from "./pages/Dashbord";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div data-test="component-app" className="flex">
      {/* <div>
        <Routes>
          <Route path="/dashboard" element={<Navbar />}></Route>
        </Routes>
      </div>

      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/profile"
            element={
              authCtx.isLoggedIn ? <ProfilePage /> : <Navigate to="/auth" />
            }
          ></Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth" element={<AuthPage />}></Route>
          )}
          <Route path="/projects" element={<ProjectBoard />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="/dashboards" element={<Dashboard />}></Route>
        </Routes>
      </Layout> */}
      <Navbar />
      <Dashbord />
    </div>
  );
};

export default App;
