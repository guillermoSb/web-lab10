import React, { useEffect, useState } from 'react'
import { FaVolumeUp, FaVolumeMute, FaSun, FaMoon } from 'react-icons/fa'
import useSound from 'use-sound'
import {
  add,
  arrayToNumber,
  divide,
  mod,
  multiply,
  sub,
} from '../utils/operations'

import Github from '../assets/github.png'
import sound from '../assets/btn.m4a'
import CalculatorButton from './CalculatorButton.jsx'

function App() {
  const [display, setDisplay] = useState([])
  const [ans, setAns] = useState(0)
  const [currentOperation, setCurrentOperation] = useState(null)
  const [calcState, setCalcState] = useState('num')
  const [audioOn, setAudioOn] = useState(true)
  const [lightTheme, setLightTheme] = useState(true)

  const [playAudio] = useSound(sound, { volume: 0.25 })

  useEffect(() => {
    playAudio()
  }, [])

  /**
   * Event indicating that a number was pressed on the UI
   * @param {number} value
   */
  const numberPressed = (value) => {
    if (audioOn) playAudio()
    // If there is a current operation set the ans to the value

    if (currentOperation && calcState === 'op') {
      setAns(arrayToNumber(display))
      setDisplay([value])
      setCalcState('num')
    } else {
      if (display.length === 9) return // Only 9 slots available
      if (value === '.' && display.find((i) => i === '.')) return // Cannot have two dots on the same expression
      if (value === '.' && display.length === 0) {
        setDisplay([0, '.'])
        return
      }
      setDisplay([...display, value])
    }
  }

  /**
   * Event that runs when the clear button was pressed
   */
  const clearPressed = () => {
    if (audioOn) playAudio()
    setAns(0)
    setCurrentOperation(null)
    setCalcState('num')
    setDisplay([])
  }

  /**
   * Event that runs when an operator was pressed
   * @param {string} operator
   */
  const operatorPressed = (operator) => {
    if (audioOn) playAudio()
    if (operator === '+/-') {
      setDisplay(`${-arrayToNumber(display)}`.split(''))
      return
    }
    setCurrentOperation(operator)
    setCalcState('op')
  }

  /**
   * Event that runs when the equal is pressed
   */
  const equalPressed = () => {
    if (audioOn) playAudio()
    let result = ans
    if (!currentOperation) {
      return
    }
    if (currentOperation === '+') {
      result = add(arrayToNumber(display), result)
    }
    if (currentOperation === '-') {
      result = sub(result, arrayToNumber(display))
    }
    if (currentOperation === '/') {
      result = divide(result, arrayToNumber(display))
    }

    if (currentOperation === '%') {
      result = mod(result, arrayToNumber(display))
    }
    if (currentOperation === 'x') {
      result = multiply(arrayToNumber(display), result)
    }
    setAns(result)
    setDisplay(`${result}`.split(''))
    setCurrentOperation(null)
  }

  return (
    <>
      <div className="buttons">
        <a
          href="https://github.com/guillermoSb/web-lab10"
          target="_blank"
          rel="noreferrer"
          role="button"
          name="github"
          className="buttons__button github"
        >
          <img src={Github} alt="Github Logo" />
        </a>
        <button
          className={`buttons__button ${
            audioOn ? '' : 'buttons__button--mute'
          }`}
          type="button"
          data-testid="audio-button"
          onClick={() => {
            setAudioOn(!audioOn)
          }}
        >
          {audioOn ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
        <button
          className="buttons__button"
          type="button"
          data-testid="theme-button"
          onClick={() => {
            setLightTheme(!lightTheme)
          }}
        >
          {lightTheme ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className={`calculator ${lightTheme ? '' : 'calculator--dark'}`}>
        <div className="calculator__screen">
          <span className="calculator__ans">
            {display.length <= 9 ? ans : ''}
          </span>
          {display.length <= 9 ? (
            display.map((item) => (
              <span
                role="math"
                key={`${item} - ${Math.random() * 1000}`}
                className="calculator__cell"
              >
                {item}
              </span>
            ))
          ) : (
            <span className="calculator__cell">ERROR</span>
          )}
        </div>
        <div className="calculator__keyboard">
          <CalculatorButton
            type="button"
            className="calculator__button calculator__button--c"
            onClick={clearPressed}
            content=" C"
          />

          <CalculatorButton
            type="button"
            className="calculator__button calculator__button--rev"
            onClick={() => {
              operatorPressed('+/-')
            }}
            content="+/-"
          />
          <CalculatorButton
            type="button"
            className="calculator__button calculator__button--mod"
            onClick={() => {
              operatorPressed('%')
            }}
            content="%"
          />
          <CalculatorButton
            type="button"
            className="calculator__button--div"
            content="/"
            onClick={() => {
              operatorPressed('/')
            }}
          />

          <CalculatorButton
            type="button"
            className="calculator__button calculator__button--mul"
            onClick={() => {
              operatorPressed('x')
            }}
            content="x"
          />

          <CalculatorButton
            className="calculator__button--min"
            content="-"
            onClick={() => {
              operatorPressed('-')
            }}
          />

          <CalculatorButton
            content="+"
            className="calculator__button--plus"
            onClick={() => {
              operatorPressed('+')
            }}
          />

          <CalculatorButton
            className="calculator__button--dot"
            content="."
            onClick={() => {
              numberPressed('.')
            }}
          />
          <CalculatorButton
            content="="
            onClick={equalPressed}
            className="calculator__button--eq"
          />
          <CalculatorButton
            content={7}
            onClick={() => {
              numberPressed(7)
            }}
            className="calculator__button--7"
          />
          <CalculatorButton
            content={8}
            onClick={() => {
              numberPressed(8)
            }}
            className="calculator__button--8"
          />
          <CalculatorButton
            content={9}
            onClick={() => {
              numberPressed(9)
            }}
            className="calculator__button--9"
          />
          <CalculatorButton
            content={4}
            onClick={() => {
              numberPressed(4)
            }}
            className="calculator__button--4"
          />
          <CalculatorButton
            content={5}
            onClick={() => {
              numberPressed(5)
            }}
            className="calculator__button--5"
          />
          <CalculatorButton
            content={6}
            onClick={() => {
              numberPressed(6)
            }}
            className="calculator__button--6"
          />
          <CalculatorButton
            content={1}
            onClick={() => {
              numberPressed(1)
            }}
            className="calculator__button--1"
          />
          <CalculatorButton
            content={2}
            onClick={() => {
              numberPressed(2)
            }}
            className="calculator__button--2"
          />
          <CalculatorButton
            content={3}
            onClick={() => {
              numberPressed(3)
            }}
            className="calculator__button--3"
          />
          <CalculatorButton
            content={0}
            onClick={() => {
              numberPressed(0)
            }}
            className="calculator__button--0"
          />
        </div>
      </div>
    </>
  )
}

export default App
