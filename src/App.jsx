import { Fragment } from "react";
import "./App.css";
import FourthSection from "./components/FourthSection/FouthSection";
import Navbar from "./components/Navbar/NavBar";
import SecondSection from "./components/Secondsection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
// import background from "./assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg";

function App() {
  return (
    <Fragment>
      <Navbar />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Fragment>
  );
}

export default App;
