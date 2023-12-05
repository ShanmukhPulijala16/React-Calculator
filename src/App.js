import { useState } from 'react';
import './index.css'

function App() {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operation, setOperation] = useState("");

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      clearCalculator();
    } else if (value === 'DEL') {
      deleteLastDigit();
    } else if (value === '=') {
      calculateResult();
    } else if (isOperation(value)) {
      handleOperation(value);
    } else {
      appendDigit(value);
    }
  }

  // const handleNumber = (value) => {
  //   if (currentOperand === "") {
  //     setCurrentOperand(value);
  //   } else {
  //     setCurrentOperand(currentOperand + value);
  //   }
  // }

  const appendDigit = (value) => {
    setCurrentOperand((prev) => prev + value);
  }

  const handleOperation = (value) => {
    if (currentOperand !== "") {
      setPreviousOperand(currentOperand);
      setCurrentOperand("");
      setOperation(value);
    }
  }

  const isOperation = (value) => {
    return ['+', '-', '*', '÷'].includes(value);
  }

  const clearCalculator = () => {
    setPreviousOperand("");
    setCurrentOperand("");
    setOperation("");
  }

  const deleteLastDigit = () => {
    if (currentOperand === "") {
      setOperation("");
      setPreviousOperand("");
      setCurrentOperand(previousOperand);
    } else {
      setCurrentOperand((prev) => prev.slice(0, -1));
    }
  }

  const calculateResult = () => {
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(previousOperand) + parseFloat(currentOperand);
        break;
      case '-':
        result = parseFloat(previousOperand) - parseFloat(currentOperand);
        break;
      case '*':
        result = parseFloat(previousOperand) * parseFloat(currentOperand);
        break;
      case '÷':
        result = parseFloat(previousOperand) / parseFloat(currentOperand);
        break;
      default:
        result = currentOperand;
        break;
    }

    setPreviousOperand("");
    setCurrentOperand(result.toString());
    setOperation("");
  }

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
      </style>
      <h1>Calculator made using React</h1>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{previousOperand} {operation}</div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button onClick={() => handleButtonClick('AC')} className="span-two">AC</button>
        <button onClick={() => handleButtonClick('DEL')}>DEL</button>
        <button onClick={() => handleButtonClick('÷')}>÷</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('=')} className="span-two">=</button>
      </div>
    </>
  );
}

export default App;




// import { useReducer } from "react";
// import './index.css'

// function App() {
//   return (
//     <div className="calculator-grid">
//       <div className="output">
//         <div className="previous-operand">{previousOperand} {operation}</div>
//         <div className="current-operand">{currentOperand}</div>
//       </div>
//       <button className="span-two">AC</button>
//       <button>DEL</button>
//       <button>÷</button>
//       <button>1</button>
//       <button>2</button>
//       <button>3</button>
//       <button>*</button>
//       <button>4</button>
//       <button>5</button>
//       <button>6</button>
//       <button>+</button>
//       <button>7</button>
//       <button>8</button>
//       <button>9</button>
//       <button>-</button>
//       <button>.</button>
//       <button>0</button>
//       <button className="span-two">=</button>
//     </div>
//   );
// }

// export default App;