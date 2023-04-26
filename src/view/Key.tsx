import './Keyboard.css'

interface KeyProps {
    value: string,
    type?: string,
    onClick: any
}

function Key({value, type, onClick}: KeyProps) {
  return (
    <>
    <div className={`key ${type}`} onClick={() => onClick(value)}>
        <div className='btn'>
            <span>{value}</span>
        </div>
    </div>
    </>
  )
}

export default Key
