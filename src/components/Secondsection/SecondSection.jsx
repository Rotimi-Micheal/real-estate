import img from "../../assets/unsplash.png";
import logo1 from "../../assets/logo6.png";
import logo2 from "../../assets/icon1.png";
import logo3 from "../../assets/logo2.png";
import logo4 from "../../assets/logo5.png";
import logo5 from "../../assets/logo4.png";
import logo6 from "../../assets/logo3.png";
import Icon from "./Icon.jsx";
const SecondSection = (props) => {
  return (
    <section className="padding">
      <h1 className="secondSectionh1">
        Minimum Living Cost takes care Of Everything
      </h1>
      <div className="flex">
        <img src={img} className="w-1/3" />
        <div className="h-full w-2/3 flex flex-wrap">
          <Icon image={logo1} text="Pay As little As possible!" />
          <Icon image={logo2} text="Enjoy wisdom of Community!" />
          <Icon image={logo3} text="Let somebody Else Take Care Of landlord!" />
          <Icon image={logo4} text="Enjoy Peaceful Environment!" />
          <Icon image={logo5} text="Stay Safe! Save Money" />
          <Icon image={logo6} text="Pay For What You Use!" />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
