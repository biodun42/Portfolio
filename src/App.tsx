import Header from "./components/body/Header";
import Top from "./components/body/Top";
import About from "./components/body/About";
import Experience from "./components/body/Experience";
import Jobs from "./components/body/Jobs";
import Projects from "./components/body/Projects";
import Contact from "./components/body/Contact";
import './components/css/Body.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-body">
        <Top />
        <About />
        <Experience />
        <Jobs />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
