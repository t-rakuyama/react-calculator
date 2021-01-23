import { waitFor } from '@testing-library/react';
import React, {useState} from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState(0);
  const [operator, setOperator] = useState();
  const [item, setItem] = useState();
  const [item2, setItem2] = useState();

  const changeDisplay = (props) => {
    var displayNumber = display ? display + props : props
    setDisplay(displayNumber)
    item2 && setItem2(displayNumber)
  }

  const changeOperatorState = (props) => {
    setOperator(props)
    display && setItem(display)
    setDisplay("")
  }

  const calculate = () => {
    var number1 = parseInt(item)
    var imputValue = parseInt(item2)
    var resultValue = 0

    if (isNaN(imputValue)) {
      //２つ目の数字をいれていない時は１つ目の数字使う
      imputValue = display ? parseInt(display) : number1
    }

    switch (operator) {
      case "plus":
        resultValue = plus(number1, imputValue)
        break;
      case "minus":
        resultValue = minus(number1, imputValue)
        break;
      default:
        break
    }
    console.log(resultValue)
    setItem(resultValue)
    setItem2(imputValue)
    setDisplay(resultValue)
  }

  const plus = (number1, imputValue) => {
    return number1 + imputValue
  }
  const minus = (number1, imputValue) => {
    return number1 - imputValue
  }
  const clear = () => {
    setDisplay(0)
    setOperator()
    setItem()
    setItem2()
  }

  return (
    <>
    <div>display {display}</div>
    <div>ope {operator}</div>
    <div>item {item}</div>
    <div>item2 {item2}</div>

      <div>
        <div>
          <button onClick={() => { changeDisplay("1") }}>1</button>
          <button onClick={() => { changeDisplay("2") }}>2</button>
          <button onClick={() => { changeDisplay("3") }}>3</button>
        </div>
        <div>
          <button onClick={() => { changeDisplay("4") }}>4</button>
          <button onClick={() => { changeDisplay("5") }}>5</button>
          <button onClick={() => { changeDisplay("6") }}>6</button>
        </div>
        <div>
          <button onClick={() => { changeDisplay("7") }}>7</button>
          <button onClick={() => { changeDisplay("8") }}>8</button>
          <button onClick={() => { changeDisplay("9") }}>9</button>
        </div>
        <div>
          <button onClick={() => { changeDisplay("0") }}>0</button>
          <button onClick={() => { changeOperatorState("plus") }}>+</button>
          <button onClick={() => { changeOperatorState("minus") }}>-</button>
        </div>
        <div>
          <button>×</button>
          <button>÷</button>
          <button onClick={() => {calculate()}}>=</button>
          <button onClick={() => {clear()}}>C</button>
        </div>
      </div>


      
    </>
  );
};

export default Calculator;
