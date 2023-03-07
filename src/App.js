import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Services/Skill";
import "./App.css";
// import Experience from "./components/Experience/Experience";
import Language from "./components/Works/Language";
import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Study from "./components/Study/Study";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#042743" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Skill />
      {/* <Experience /> */}
      <div className="contain">
        <Study />
      </div>
      <Language />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;