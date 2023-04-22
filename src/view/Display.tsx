import { useState } from 'react'
import './Display.css'

function Display({ display }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="display">{display}</div>
    </>
  )
}

export default Display
