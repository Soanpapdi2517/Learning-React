import { MdDarkMode } from "react-icons/md";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDarkMode } from "react-icons/md";

const Controls = () => {
  const nightMode = useSelector((store) => store.night);
  const inputBox = useRef();
  const dispatch = useDispatch();
  const handleOnIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleOnDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const onAddition = () => {
    dispatch({
      type: "ADDITION",
      payload: {
        num: inputBox.current.value,
      },
    });
    inputBox.current.value = "";
  };
  const onSubstract = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: {
        num: inputBox.current.value,
      },
    });
    inputBox.current.value = "";
  };
  const handleOnDarkMode = () => {
    dispatch({
      type: "NIGHT_MODE",
      payload: {
        night: true,
      },
    });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleOnIncrement}
        >
          Increment +1
        </button>
        <button
          type="button"
          className={`btn ${
            nightMode ? " btn btn-light" : "btn-outline-danger"
          }  btn-lg px-4`}
          onClick={handleOnDecrement}
        >
          Decrement -1
        </button>
        <span onClick={handleOnDarkMode} className="fs-2 nightbutton">
          {nightMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </span>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <input
          type="text"
          className="inputBox"
          aria-label="Text input with checkbox"
          ref={inputBox}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={onAddition}
        >
          Add
        </button>
        <button
          type="button"
          className={`btn ${
            nightMode ? " btn btn-light" : "btn-outline-danger"
          }  btn-lg px-4`}
          onClick={onSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
