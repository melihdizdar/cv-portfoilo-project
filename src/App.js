import BotBar from "./components/botbar/BotBar";
import Topbar from "./components/topbar/TopBar";
import Resume from "./pages/resume/Resume";
// import AboutMe from "./pages/aboutme/AboutMe";

function App() {
  return (
    <>
      <Topbar />
      <Resume></Resume>
      <BotBar />
    </>
  );
}

export default App;
