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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const showAlert = (message, type) => {

    if (type === 'success') {
      toast.success(message, {
        position: "top-center",
        autoClose: 1500,
        theme: "colored"
      })
    }

    if (type === 'danger') {
      toast.error(message, {
        position: "top-center",
        autoClose: 1500,
        theme: "colored"
      })
    }
  }

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#212426" : "",
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
      <Contact showAlert={showAlert} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;