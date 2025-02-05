import { useSelector } from "react-redux";

const Header = () => {
    const nightMode = useSelector(store => store.night)
  return (
    <>
      <h1 className={`display-5 fw-bold  ${nightMode ? 'text-white' : 'text-body-emphasis'}`}>
        Increment/Decrement Page
      </h1>
    </>
  );
};

export default Header;
