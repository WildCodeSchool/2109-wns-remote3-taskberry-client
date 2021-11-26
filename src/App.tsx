import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";

const App = () => {
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
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/projects" element={<ProjectBoard />}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
