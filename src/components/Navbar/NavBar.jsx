import { Fragment } from "react";
import logo from "../../assets/logo-1.png";
import Nav from "../Nav/Nav";
import NavContent from "../NavContent/NavContent";

const Navbar = () => {
  return (
    <Fragment>
      <section className="background ">
        <header className="padding ">
          <div className="flex h-16   borderBottom">
            <div className=" w-1/3">
              <img className=" " src={logo} />
            </div>
            <Nav />
          </div>
          <NavContent />
        </header>
      </section>
    </Fragment>
  );
};

export default Navbar;
