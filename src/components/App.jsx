import React, { useState } from 'react'
import { add, arrayToNumber, divide, mod, multiply, sub } from '../utils/operations';

function App() {
  const [display, setDisplay] = useState([])
  const [ans, setAns] = useState(0);
  const [currentOperation, setCurrentOperation] = useState(null);
  const [calcState, setCalcState] = useState('num');

  /**
   * Event indicating that a number was pressed on the UI
   * @param {number} value 
   */
  const numberPressed = (value) => {

    // If there is a current operation set the ans to the value
    
    if (display.length === 9)  return;  // Only 9 slots available
    if (value === '.' && display.find(i => i === '.')) return;  // Cannot have two dots on the same expression
    if (value === '.' && display.length === 0) {
      setDisplay([0,'.'])
      return
    }
    if (currentOperation && calcState === 'op') {
      setAns(arrayToNumber(display));
      setDisplay([value]);
      setCalcState('num')
    } else {
      setDisplay([...display, value]);

    }
  }

  /**
   * Event that runs when the clear button was pressed
   */
  const clearPressed = () => {
    setAns(0);
    setCurrentOperation(null);
    setCalcState('num');
    setDisplay([]);
  };

  /**
   * Event that runs when an operator was pressed
   * @param {string} operator
   */
  const operatorPressed = (operator) => {
    setCurrentOperation(operator);   
    setCalcState('op') 
  }

  /**
   * Event that runs when the equal is pressed
   */
  const equalPressed = () => {
    let result = ans;
    if (!currentOperation) {
      return;
    }
    if (currentOperation === '+') {
      result = add(arrayToNumber(display), result);
    }
    if (currentOperation === '-') {
      result = sub(result, arrayToNumber(display),);
    }
    if (currentOperation === '/') {
      result = divide(result, arrayToNumber(display));
    }
    if (currentOperation === '+/-') {
      result = -result;
    }
    if (currentOperation === '%') {
        result = mod(result, arrayToNumber(display), );
    }
    if (currentOperation === 'x') {
        result = multiply(arrayToNumber(display), result);
    }
    setAns(result);
    setDisplay(`${result}`.split(''))
    setCurrentOperation(null);
  }
  


  return (
    <div className='calculator'>
      <div className="calculator__screen">
        {display.map(item => <span key={item-`${Math.random()}`} className='calculator__cell'>{item}</span> )}
    
      </div>
      <div className="calculator__keyboard">
        <button className='calculator__button calculator__button--c' onClick={clearPressed}>C</button>
        <button className='calculator__button calculator__button--rev' onClick={() => {operatorPressed('+/-')}}>+/-</button>
        <button className='calculator__button calculator__button--mod' onClick={() => {operatorPressed('%')}}>%</button>
        <button className='calculator__button calculator__button--div' onClick={() => {operatorPressed('/')}}>/</button>
        <button className='calculator__button calculator__button--mul' onClick={() => {operatorPressed('x')}}>X</button>
        <button className='calculator__button calculator__button--min' onClick={() => {operatorPressed('-')}}>-</button>
        <button className='calculator__button calculator__button--plus' onClick={() => {operatorPressed('+')}}>+</button>
        <button className='calculator__button calculator__button--dot' onClick={()=>{numberPressed('.')}}>.</button>
        <button className='calculator__button calculator__button--eq' onClick={equalPressed}>=</button>
        <button className='calculator__button calculator__button--1' 
        onClick={() => {numberPressed(1)}}>
          1
          </button>
        <button className='calculator__button calculator__button--2' 
        onClick={() => {numberPressed(2)}}>
          2
          </button>
        <button className='calculator__button calculator__button--3' 
        onClick={() => {numberPressed(3)}}>
          3
          </button>
        <button className='calculator__button calculator__button--4' 
        onClick={() => {numberPressed(4)}}>
          4
          </button>
        <button className='calculator__button calculator__button--5' 
        onClick={() => {numberPressed(5)}}>
          5
          </button>
        <button className='calculator__button calculator__button--6' 
        onClick={() => {numberPressed(6)}}>
          6
          </button>
        <button className='calculator__button calculator__button--7' 
        onClick={() => {numberPressed(7)}}>
          7
          </button>
        <button className='calculator__button calculator__button--8' 
        onClick={() => {numberPressed(8)}}>
          8
          </button>
        <button className='calculator__button calculator__button--9' 
        onClick={() => {numberPressed(9)}}>
          9
          </button>
        <button className='calculator__button calculator__button--0' 
        onClick={() => {numberPressed(0)}}>
          0
          </button>
      </div>
    </div>
  )
}

export default App