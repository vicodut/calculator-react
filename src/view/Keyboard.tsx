import './Keyboard.css'
import Key from './Key'

function Calculator({handleKey}) {
  return (
    <>
      <div className='keyboard'>
          <Key value='7' onClick={(e) => handleKey(e)} />
          <Key value='8' onClick={(e) => handleKey(e)} />
          <Key value='9' onClick={(e) => handleKey(e)} />
          <Key value='/' type='action' onClick={(e) => handleKey(e)}/>
        
          <Key value='4' onClick={(e) => handleKey(e)} />
          <Key value='5' onClick={(e) => handleKey(e)} />
          <Key value='6' onClick={(e) => handleKey(e)} />
          <Key value='x' type='action' onClick={(e) => handleKey(e)} />
        
          <Key value='1' onClick={(e) => handleKey(e)} />
          <Key value='2' onClick={(e) => handleKey(e)} />
          <Key value='3' onClick={(e) => handleKey(e)} />
          <Key value='-' type='action' onClick={(e) => handleKey(e)} />
        
          <Key value='0' onClick={(e) => handleKey(e)} />
          <Key value='.' onClick={(e) => handleKey(e)} />
          <Key value='=' type='action' onClick={(e) => handleKey(e)} />
          <Key value='+' type='action' onClick={(e) => handleKey(e)} />
          <Key value='AC' type='action' onClick={(e) => handleKey(e)} />
      </div>
    </>
  )
}

export default Calculator
