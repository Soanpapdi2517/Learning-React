import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Controls from "./Components/controls";
import Cards from "./Components/Cards";
import { useSelector } from "react-redux";
import NightBackground from "./Components/nightBackground";
function App() {
  const darkMode = useSelector((store) => store.night);
  return (
    <>
    <div className="px-4 py-5 my-5 text-center">
      {darkMode ? (
        <NightBackground>
          
            <Header></Header>
            <DisplayCounter></DisplayCounter>
            <Controls></Controls>
  
        </NightBackground>
      ) : (
        <Cards>
          <Header></Header>
          <DisplayCounter></DisplayCounter>
          <Controls></Controls>
        </Cards>
      )}
    </div>
    </>
  );
}

export default App;
