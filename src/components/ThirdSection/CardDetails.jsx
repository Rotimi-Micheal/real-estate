import image1 from "../../assets/unsplash_2d4lAQAlbDA.png";

const CardDetails = () => {
  return (
    <div className="carddiv bg-black my-14 flex justify-center items-center borderr">
      <div className="w-fit   flex flex-col ">
        <img className="imgdiv" src={image1} />
        <div className="mx-7">
          <h1 className="thirdHeader py-7">
            2578 folsom Street, San Francisco, CA, 94110
          </h1>
          <span className="privText pt-9">Private Room</span>
          <h3 className="cost pb-5">$1200/Month</h3>
        </div>
        <div className="flex justify-between  items-center">
          <span className="flex justify-center items-center spanBorder w-1/3 text-center">
            4
          </span>
          <span className="flex justify-center items-center spanBorder middleBorder w-1/3 text-center">
            2
          </span>
          <span className="flex justify-center items-center spanBorder w-1/3 text-center">
            2
          </span>
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
