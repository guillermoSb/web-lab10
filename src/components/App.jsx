import React from 'react'

function App() {
  return (
    <div className='calculator'>
      <div className="calculator__screen">
        <span className='calculator__cell'>3</span>
        <span className='calculator__cell'>.</span>
        <span className='calculator__cell'>1</span>
        <span className='calculator__cell'>4</span>
        <span className='calculator__cell'>4</span>
        <span className='calculator__cell'>4</span>
        <span className='calculator__cell'>4</span>
      </div>
      <div className="calculator__keyboard">
        <button className='calculator__button calculator__button--c'>C</button>
        <button className='calculator__button calculator__button--rev'>+/-</button>
        <button className='calculator__button calculator__button--mod'>%</button>
        <button className='calculator__button calculator__button--div'>/</button>
        <button className='calculator__button calculator__button--mul'>X</button>
        <button className='calculator__button calculator__button--min'>-</button>
        <button className='calculator__button calculator__button--plus'>+</button>
        <button className='calculator__button calculator__button--dot'>.</button>
        <button className='calculator__button calculator__button--eq'>=</button>
        <button className='calculator__button calculator__button--1'>1</button>
        <button className='calculator__button calculator__button--2'>2</button>
        <button className='calculator__button calculator__button--3'>3</button>
        <button className='calculator__button calculator__button--4'>4</button>
        <button className='calculator__button calculator__button--5'>5</button>
        <button className='calculator__button calculator__button--6'>6</button>
        <button className='calculator__button calculator__button--7'>7</button>
        <button className='calculator__button calculator__button--8'>8</button>
        <button className='calculator__button calculator__button--9'>9</button>
        <button className='calculator__button calculator__button--0'>0</button>
      </div>
    </div>
  )
}

export default App