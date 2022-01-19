import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div data-test="component-app">
      <div>
        <Routes>
          <Route path="/dashboards" element={<Navbar />}></Route>
        </Routes>
      </div>
      <Layout>
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
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
