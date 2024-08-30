import Header from "./components/body/Header";
import Top from "./components/body/Top";
import About from "./components/body/About";
import Experience from "./components/body/Experience";
import Jobs from "./components/body/Jobs";
import Projects from "./components/body/Projects";
import Contact from "./components/body/Contact";
import "./components/css/Body.css";
import "./components/css/Responsiveness.css";
import "./index.css";

const App = () => {
  return (
    <div className="bg-container">
      <Header />
      <div className="bg-body">
        <Top />
        <About />
        <Experience />
        <Jobs />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
