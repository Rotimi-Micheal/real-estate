// import map from "./assets/Rectangle-1.png"
import map from "../../assets/Rectangle-1.png";

const NavContent = () => {
  return (
    <div className="flex items-center justify-between  mt-16">
      <div className="w-1/2 textHeader ">
        <div className="txt ">
          <h1>
            The most Affordable place To Stay in The San Francisco Bay Area
          </h1>
        </div>
      </div>
      <div className="w-1/2 pl-40 ">
        <img src={map} className=" rounded" />
        <div className="dropdown flex items-center justify-center rounded-xl">
          <select className="firstDropdown ">
            <option>All Type</option>
          </select>
          <select className="SecondDropdown">
            <option>All Type</option>
          </select>
          <h5 className="search">SS</h5>
        </div>
      </div>
    </div>
  );
};

export default NavContent;
