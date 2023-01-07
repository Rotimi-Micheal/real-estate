import CardDetails from "./CardDetails";

const ThirdSection = () => {
  return (
    <section className=" bg3 h-screen">
      <div className="padding">
        <header className="flex items-center justify-between ">
          <h1 className="relative headerSection3 headerborder">
            List Of Properties
          </h1>
          <button className="btn p-4">View All Property</button>
        </header>
        <div className="flex flex-row flex-wrap -mx-2 w-full">
          <CardDetails />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
