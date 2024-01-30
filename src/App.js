import "./App.css";
import Education from "./Education";
import Interest from "./Interest";
import Name from "./Name";
import Projects from "./Projects";
import TechnicalSkills from "./TechnicalSkills";
import WhyHireMe from "./WhyHireMe";
import Conclusion from "./Conclusion";

function App() {
  return (
    <div className="App">
      <Name />
      <Education />
      <TechnicalSkills />
      <Projects />
      <Interest />
      <WhyHireMe />
      <Conclusion />
    </div>
  );
}

export default App;
