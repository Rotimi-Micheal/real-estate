import { Fragment } from "react";
import FourthSectionText from "./FourthSectionText";
import ImgDiv from "./ImgDiv";

const FourthSection = () => {
  return (
    <Fragment>
      <section className="padding h-screen">
        <div className="flex justify-between items-center w-full pt-14">
          <ImgDiv />
        </div>
      </section>
    </Fragment>
  );
};

export default FourthSection;
