import React, { useState } from 'react'
import '../assets/styles/home.css'

const Home = () => {
  const [screen,setScreen] = useState({
    display: 0
  });
  const [isCalculated, setIsCalculated] = useState(false); 

  const openCalc = () => {
    setScreen(0)
  }

  const changeValue = (event) => {
    if (event.target.value === 'AC'){
      setScreen({
        display : 0
      });
    }else {
      let dis = screen.display === 0 ? event.target.value : screen.display + event.target.value;
      setScreen({
        display: dis
      });
    }
  }

  const equalEval = () => {
    const numbers = screen.display.split(/[-+×÷]/).map(Number);
    const operators = screen.display.split(/\d+/).filter(Boolean);

    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "+") {         
        result += numbers[i+1];
      } else if (operators[i] === "-") {
        result -= numbers[i+1];
      } else if (operators[i] === "×") {
        result *= numbers[i+1];
      } else if (operators[i] === "÷") {
        result /= numbers[i+1];
      }
    }

    setScreen ({
      display: result
    });
  }

  const calc = (...num) => {
    return num.join("");
  }

  return (
    <div>
      <div className="calculator">
          <div className="top-part"> 
              <span className="logo">Casio</span>
              <span className="model">CS-991ES PLUS</span>
              <span className="svpam">NATURAL- V.P.A.M.</span>
              <div className="solar"></div>
              <span className="power">Two way power</span>
          </div>
          <div className="screen">
            <div className="digit-font-result">
              {screen.display}
            </div>
          </div>
          <div className="top-buttons">
            <div className="shift">
              Shift 
              <button>
              </button>
            </div>
            <div className="alpha">
              <span className="red">alpha</span>
              <button></button>
            </div>
            <div className="mode">Mode<button></button></div>
            <div className="on">
              on
              <button onClick={()=>openCalc()}>
              </button></div>
          </div>
          <div className="replay">Replay</div>
          <table className="up">
            <tbody>
              <tr>
                <td>
                  SOLVE <span className="red">=</span>
                  <button>CALC</button>
                </td>
                <td>
                  d/dx<button>▬▫</button>
                </td>
                <td></td>
                <td></td>
                <td>
                  x!<button>x <sup>-1</sup></button>
                </td>
                <td>
                  log <sup>-1</sup>
                  <button>log▬</button>
                </td>
              </tr>
              <tr>
                <td>
                  ▬<button>▫/▫</button>
                </td>
                <td>
                  ∛▪<button>√▪</button>
                </td>
                <td>
                  x <sup>3</sup>
                  <span className="green">DEC</span>
                  <button>x <sup>2</sup></button>
                </td>
                <td>
                  ▪√▫ <span className="green">HEX</span>
                  <button>x <sup>▪</sup></button>
                </td>
                <td>
                  10 <sup>▪</sup>
                  <span className="green">BIN</span>
                  <button>log</button>
                </td>
                <td>
                  e <sup>▪</sup>
                  <span className="green">OCT</span>
                  <button>In</button>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="red">A</span>
                  <button>(▬)</button>
                </td>
                <td>
                  <span className="red">B</span>
                  <button>∘❜❜</button>
                </td>
                <td>
                  Abs<span className="red">C</span>
                  <button>hyp</button>
                </td>
                <td>
                  sin <sup>-1</sup>
                  <span className="red">D</span>
                  <button>sin</button>
                </td>
                <td>
                  cos <sup>-1</sup>
                  <span className="red">E</span>
                  <button>cos</button>
                </td>
                <td>
                  tan <sup>-1</sup>
                  <span className="red">F</span>
                  <button>tan</button>
                </td>
              </tr>
              <tr>
                <td>
                  STO<button>RCL</button>
                </td>
                <td>
                  ← i<button>ENG</button>
                </td>
                <td>
                  %<button>(</button>
                </td>
                <td>
                  ❜ <span className="red">X</span>
                  <button>)</button>
                </td>
                <td>
                  <span className="red">Y</span>
                  <button>S⇔D</button>
                </td>
                <td>
                  M- <span className="red">Y</span>
                  <button>M+</button>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="down">
          <tbody>
            <tr>
              <td>CONST <button value="7" id="number7" onClick={(e)=>changeValue(e)}>7</button></td>
              <td>CONV <button value="8" id="number8" onClick={(e)=>changeValue(e)}>8</button></td>
              <td>CLR <button value="9" id="number9" onClick={(e)=>changeValue(e)}>9</button></td>
              <td>INS <button className="orange">DEL</button></td>
              <td>OFF <button className="orange" value='AC' id="reset" onClick={(e)=>changeValue(e)}>AC</button></td>
            </tr>
            <tr>
              <td>MATRIX <button value="4" id="number4" onClick={(e)=>changeValue(e)}>4</button></td>
              <td>VECTOR<button value="5" id="number5" onClick={(e)=>changeValue(e)}>5</button></td>
              <td>lol<button value="6" id="number6" onClick={(e)=>changeValue(e)}>6</button></td>
              <td>nPr <button value="×" id="multiply" onClick={(e)=>changeValue(e)}>×</button></td>
              <td>nCr <button value="÷" id="divition" onClick={(e)=>changeValue(e)}>÷</button></td>
            </tr>
            <tr>
              <td>STAT <button value="1" id="number1" onClick={(e)=>changeValue(e)}>1</button></td>
              <td>CMPLX<button value="2" id="number2" onClick={(e)=>changeValue(e)}>2</button></td>
              <td>Base<button value="3" id="number3" onClick={(e)=>changeValue(e)}>3</button></td>
              <td>Pol <button value="+" id="sum" onClick={(e)=>changeValue(e)}>+</button></td>
              <td>REc <button value="-" id="substract" onClick={(e)=>changeValue(e)}>-</button></td>
            </tr>
            <tr>
              <td>Rnd <button value="0" id="number3" onClick={(e)=>changeValue(e)}>0</button></td>
              <td>Ran# <span>Raint</span><button>•</button></td>
              <td>π<span className="red">e</span><button>×10 <sup>x</sup></button></td>
              <td>DRG <button>Ans</button></td>
              <td>= <button onClick={equalEval}>=</button></td>
            </tr>
            </tbody>
          </table>
        
      </div>
    </div>
  )
}

export default Home