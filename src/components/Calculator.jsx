import React, { useState } from "react";
import'./Calculator.css'
import Header from "./Header";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e){
    var input=e.target.value
    if(num==0){
      setNum(input)
    }else{
      setNum(num + input);
    }
  }

  const limpiar= () => {
    setNum("");
    setOldNum("");
    setOperator("");
  }

  function porcentaje() {
    setNum(num / 100);
  }

  function cuadrado () {
    setNum(num * num);
  }

  const backspace= () => {
    setNum(num.slice(0,-1));
  }

  function operadores(e) {
    const operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  } 

  function calcular() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
        console.log(oldnum)
        console.log(num)
        console.log(oldnum-num)
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }
  return (
    <div> 
      <Header/>
      <div style={{marginTop: "4em"}}></div>
      <div className='wrapper'>
      <h1 className="result">{num}</h1>
      <button onClick={limpiar} id="eliminar">AC</button>
      <button className="delete" onClick={backspace}>C</button>
      <button onClick={porcentaje} id="porcen">%</button>
      <button className="orange" onClick={operadores} value="/" id="division">/</button>
      <button className="numeros" onClick={inputNum} value={7}>7</button>
      <button className="numeros" onClick={inputNum} value={8} >8</button>
      <button className="numeros" onClick={inputNum} value={9} >9</button>
      <button className="orange" onClick={operadores} value="x" id="multiplicacion">x</button>
      <button className="numeros" onClick={inputNum} value={4} >4</button>
      <button className="numeros" onClick={inputNum} value={5} >5</button>
      <button className="numeros" onClick={inputNum} value={6} >6</button>
      <button className="orange" onClick={operadores} value="-" id="resta">-</button>
      <button className="numeros" onClick={inputNum} value={1} >1</button>
      <button className="numeros" onClick={inputNum} value={2} >2</button>
      <button className="numeros" onClick={inputNum} value={3} >3</button>
      <button className="suma" onClick={operadores} value="+">+</button>
      <button className="numeros" onClick={inputNum} value={0}>0</button>
      <button className="numeros" onClick={cuadrado} id="logo">x²</button>
      <button className="igual" onClick={calcular} value="=">=</button>
      </div>
    </div>
    
  );
}
