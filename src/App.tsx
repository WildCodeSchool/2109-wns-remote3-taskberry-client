import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Layout data-test="component-app">
      <Routes>
        <Route path="/" element={<HomePage />} >
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
