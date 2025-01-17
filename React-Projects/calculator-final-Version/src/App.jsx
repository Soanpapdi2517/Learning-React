import styles from "./App.module.css";
import Display from "./Components/display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [valuePresent, setValuePresent] = useState("4");
  const buttonExe = (event) => {
    if (event.target.textContent === "C") {
      setValuePresent("");
    } else if (event.target.textContent === "=") {
      setValuePresent(eval(valuePresent));
    } else {
      let newVal = valuePresent + event.target.textContent;
      setValuePresent(newVal);
    }
  };
  // const buttonExe = (buttonPressed) => {
  //   if(buttonPressed === 'C'){
  //     setValuePresent("");
  //   }
  //   else if(buttonPressed === "="){
  //     setValuePresent(eval(valuePresent));
  //   }
  //   else{
  //     let newVal = valuePresent + buttonPressed;
  //     setValuePresent(newVal);
  //   }
  // }
  return (
    <div className={styles.calculator}>
      <Display displayOnChangeValue={valuePresent}></Display>
      <ButtonsContainer onButtonClicked={buttonExe}></ButtonsContainer>
    </div>
  );
}

export default App;
