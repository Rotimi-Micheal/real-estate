import CardDetails from "./CardDetails";

const ThirdSection = () => {
  return (
    <section className=" bg3 ">
      <div className="padding">
        <header className="flex items-center justify-between ">
          <h1 className="relative headerSection3 headerborder">
            List Of Properties
          </h1>
          <button className="btn p-4">View All Property</button>
        </header>
        <div className="flex flex-row flex-wrap -mx-2 w-full justify-between">
          <CardDetails />
          <CardDetails />
          <CardDetails />
          <CardDetails />
          <CardDetails />
          <CardDetails />
        </div>
      </div>

      <div className="flex items-center justify-center h-20 ">
        <div className="w-56 pagination flex justify-between items-center">
          <button className="flex items-center justify-center paginationBorder h-full w-full p-6">
            first
          </button>
          <button className="flex items-center justify-center paginationBorder h-full w-full">
            1
          </button>
          <button className="flex items-center justify-center paginationBorder h-full w-full">
            2
          </button>
          <button className="flex items-center justify-center paginationBorder h-full w-full">
            3
          </button>
          <button className="flex items-center justify-center paginationBorder h-full w-full p-6">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
