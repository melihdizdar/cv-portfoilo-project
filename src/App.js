import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BotBar from "./components/botbar/BotBar";
import Topbar from "./components/topbar/TopBar";
import Resume from "./pages/resume/Resume";
import AboutMe from "./pages/aboutme/AboutMe";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Topbar />
        <Switch>
          <Router exact path="/">
            <AboutMe/>
          </Router>
          <Router path="/resume">
            <Resume/>
          </Router>
          <Router path="/projects">
            <Projects/>
          </Router>
          <Router path="/contact">
            <Contact/>
          </Router>
        </Switch>
      <BotBar />
    </Router>
  );
}

export default App;
