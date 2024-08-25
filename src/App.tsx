import Header from "./components/body/Header";
import Body from "./components/body/Body";
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
        <Body />
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
