const Icon = (props) => {
  return (
    <div className="flex flex-col justify-center items-center iconText h-60 w-1/3 p-7">
      <div className="iconImg flex items-center justify-center mb-6 mr-40">
        <img className="h-9 w-9" src={props.image} />
      </div>
      <h3>{props.text}</h3>
    </div>
  );
};
export default Icon;
