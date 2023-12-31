import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="w-full h-auto mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
      </div>
    </div>
  );
}

export default App;
