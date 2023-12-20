import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Educations from "./component/educations/Educations";
import About from "./component/about/About";

function App() {
  return (
    <>
      <section data-theme="corporate" className="box-border">
        <Navbar />
        <Home />
        <About />
        <Educations />
      </section>
    </>
  );
}

export default App;
