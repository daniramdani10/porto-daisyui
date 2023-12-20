import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Educations from "./component/educations/Educations";

function App() {
  return (
    <>
      <section data-theme="corporate" className="box-border">
        <Navbar />
        <Home />
        <Educations />
      </section>
    </>
  );
}

export default App;
