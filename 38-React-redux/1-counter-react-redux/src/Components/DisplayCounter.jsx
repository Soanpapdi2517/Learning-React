import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const value = useSelector((store) => store.counter);
  const nightMode = useSelector((store) => store.night);
  return (
    <div className="col-lg-6 mx-auto">
      <p className={` mb-4 ${nightMode ? "text-white fs-2" : "lead"}`}>
        Counter's value: {value}
      </p>
    </div>
  );
};

export default DisplayCounter;
