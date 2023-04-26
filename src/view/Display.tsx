import { useState } from 'react'
import './Display.css'



const REGEX_NUMBERS = /([0-9.])+/;
const REGEX_ACTIONS = /[+-/x]/;

function Display({ display, buffer }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="display">

      <div className='buffer'>
          {(() => {
            let disp = [];
            for (let i = 0; i <= buffer.length; i++) {
              if(REGEX_NUMBERS.test(buffer[i])) {
                disp.push(<span key={i} className="number">{buffer[i]}</span>)
              } else if(REGEX_ACTIONS.test(buffer[i])) {
                disp.push(<span key={i} className="action">{buffer[i]}</span>)
              }

            }
            return disp;
          })()}
        </div>

        <div className='text'>
          {(() => {
            let disp = [];
            for (let i = 0; i <= display.length; i++) {
              if(REGEX_NUMBERS.test(display[i])) {
                disp.push(<span key={i} className="number">{display[i]}</span>)
              } else if(REGEX_ACTIONS.test(display[i])) {
                disp.push(<span key={i} className="action">{display[i]}</span>)
              }

            }
            return disp;
          })()}
        </div>
      </div>
    </>
  )
}

export default Display
