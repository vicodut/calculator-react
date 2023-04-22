import { useState } from 'react'
import './Keyboard.css'

function Calculator({handleClick}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='keyboard'>
        <div className="key" onClick={() => handleClick(7)}>7</div>
        <div className="key" onClick={() => handleClick(8)}>8</div>
        <div className="key" onClick={() => handleClick(9)}>9</div>
        <div className="key" onClick={() => handleClick('/')}>/</div>
        
        <div className="key" onClick={() => handleClick(4)}>4</div>
        <div className="key" onClick={() => handleClick(5)}>5</div>
        <div className="key" onClick={() => handleClick(6)}>6</div>
        <div className="key" onClick={() => handleClick('x')}>x</div>
        
        <div className="key" onClick={() => handleClick(1)}>1</div>
        <div className="key" onClick={() => handleClick(2)}>2</div>
        <div className="key" onClick={() => handleClick(3)}>3</div>
        <div className="key" onClick={() => handleClick('-')}>-</div>
        
        <div className="key" onClick={() => handleClick(0)}>0</div>
        <div className="key" onClick={() => handleClick('.')}>.</div>
        <div className="key" onClick={() => handleClick('=')}>=</div>
        <div className="key" onClick={() => handleClick('+')}>+</div>
      </div>
    </>
  )
}

export default Calculator
