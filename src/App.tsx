import "./App.css";
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";
function App() {
  return (
    <div className="App flex">
      <Navbar />
      <ProjectBoard />
    </div>
  );
}

export default App;
