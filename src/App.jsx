import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import SecondSection from "./components/Secondsection/SecondSection";
// import background from "./assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg";

function App() {
  return (
    <Fragment>
      <Navbar />
      <SecondSection />
    </Fragment>
  );
}

export default App;
