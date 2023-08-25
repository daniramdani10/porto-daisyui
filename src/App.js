import "./App.css";
import About from "./component/about/About";
import Educations from "./component/educations/Educations";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <section data-theme="halloween" className="box-border">
        <Navbar />
        <Home />
        <About />
        <Educations />
      </section>
    </>
  );
}

export default App;
