import React from 'react'

function CalculatorButton({ content, onClick, className }) {
  return (
    <button
      type="button"
      className={`calculator__button ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export default CalculatorButton
