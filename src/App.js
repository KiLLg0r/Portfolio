import "./assets/css/main.css";

// Components
import Navigation from "./components/Navigation";
import Home from "./components/Sections/Home";
import Contact from "./components/Sections/Contact";
import About from "./components/Sections/About";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
