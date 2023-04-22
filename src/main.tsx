import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Calculator from './Calculator.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
)
