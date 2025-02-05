import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Controls from "./Components/controls";
import Cards from "./Components/Cards";
function App() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <Cards>
        <Header></Header>
        <DisplayCounter></DisplayCounter>
        <Controls></Controls>
        </Cards>
    </div>
  );
}

export default App;
