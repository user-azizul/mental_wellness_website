import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import WorkingSteps from "./Components/WorkingSteps";

function App() {
  return (
    <div className="font-primary bg-heroBg text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <WorkingSteps />
    </div>
  );
}

export default App;
