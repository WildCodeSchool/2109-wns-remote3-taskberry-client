import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div data-test="component-app">
      <div>
        <Routes>
          <Route path="/dashboard" element={<Navbar />}></Route>
        </Routes>
      </div>

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
