import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  const nightMode = useSelector((store) => store.night_mode);
  return (
    <div className="col-lg-6 mx-auto">
      <p className={` mb-4 ${nightMode ? "text-white fs-2" : "lead"}`}>
        Counter's value: {counterVal}
      </p>
    </div>
  );
};

export default DisplayCounter;
