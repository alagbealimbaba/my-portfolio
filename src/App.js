import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
