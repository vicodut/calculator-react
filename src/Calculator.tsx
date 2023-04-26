import { useState } from 'react'
import Keyboard from './view/Keyboard'
import Display from './view/Display'
import './Calculator.css'

const REGEX_NUMBERS = /([0-9.])+/;
const REGEX_ACTIONS = /[+-/x]/;
const REGEX_ACTIONS_NEG = /[+/x]/;

function Calculator() {
  const [display, setDisplay] = useState(new Array<string>());
  const [buffer, setBuffer] = useState(new Array<string>());
  const [reset, setReset] = useState(true);


  const addChain = (chain: Array<string>, newElement: string): Array<string> => {
    console.log(reset && REGEX_ACTIONS.test(newElement))
    if(chain.length != 0 && (!reset)) {
      if(REGEX_NUMBERS.test(newElement) && REGEX_NUMBERS.test(chain[chain.length - 1])) {
        const newKey = chain.pop() + newElement;
        return [...chain, newKey];
      } else if(REGEX_ACTIONS_NEG.test(newElement) && REGEX_ACTIONS.test(chain[chain.length - 1])) {
        return [...chain];
      } else {
        return [...chain, newElement];
      }
    } else {
      setReset(false);
      return [newElement];
    }
  }

  const keyPress = async (e: string) => {
    let disp: Array<string> = [...display];
    let buff: Array<string>;
    if(REGEX_NUMBERS.test(e) || REGEX_ACTIONS.test(e)) {
      disp = addChain(disp, e);
    } else if(e === 'AC') {
      disp = [];
      buff = [];
    } else if(e === '=') {
      setBuffer([...disp]);
      calc(disp, 0);
      setReset(true);
      return;
    }

    setDisplay(disp);
    if (buff) {
      setBuffer(buff);
    }
  }

  const calc = (chain: Array<string>, start: number) => {
    const newDisplay = [...display];
    console.log(chain, start)
    if(chain.length === 0) {
      console.log(start)
      setDisplay([start.toString()]);
      return;
    }

    if(REGEX_ACTIONS.test(chain[chain.length - 1])) {
      newDisplay.pop();
      setDisplay(newDisplay);
      calc(display, start);
      return;
    }

    const el = chain.shift();

    if(REGEX_NUMBERS.test(el)) {
      start = +el;
      calc(display, start);
    } else if(REGEX_ACTIONS.test(el)) {
      switch (el) {
        case '+': 
          calc(display,  +start + +chain.shift());
          break;
        case '-': 
          calc(display,  +start - +chain.shift());
          break;
        case 'x': 
          calc(display,  +start * +chain.shift());
          break;
        case '/': 
          calc(display,  +start / +chain.shift());
          break;
      }
    }
  }

  return (
    <>
    <div className="calculator">
      <Display display={display} buffer={buffer} />
      <Keyboard handleKey = {keyPress}/>
    </div>
    </>
  )
}

export default Calculator
