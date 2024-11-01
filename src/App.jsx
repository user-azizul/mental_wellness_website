import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";

function App() {
  return (
    <div className="font-primary bg-heroBg text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Service />
    </div>
  );
}

export default App;
