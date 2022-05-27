import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import TicketBoard from "./pages/TicketBoard";
import AuthContext from "./store/auth-context";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div data-test="component-app">
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
          <Route
            path="/tickets"
            element={
              authCtx.isLoggedIn ? <TicketBoard /> : <Navigate to="/auth" />
            }
          ></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route
            path="/projects"
            element={
              authCtx.isLoggedIn ? <Projects /> : <Navigate to="/auth" />
            }
          ></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
