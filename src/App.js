import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Experience from "./components/Experience/experience";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
