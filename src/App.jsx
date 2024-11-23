import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  let [calVal,setCalVal] = useState("");
  let OnButtonsClicks=(buttonText)=>{
    if(buttonText === 'C'){
      setCalVal("")
    }else if(buttonText === '='){
      let equalto = eval(calVal)
      setCalVal(equalto)
    }else{
      let newValue = calVal + buttonText
      setCalVal(newValue)
    }
  }
  return (
    <>
      <h1>Calculator</h1>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>

        <ButtonContainer onButtonClick={OnButtonsClicks}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
