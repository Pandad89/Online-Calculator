import React, { useState } from 'react';
import "./Calculator.css"

function Calculator() {
    // let [num, setNum] = useState("");
    let [result, setResult] = useState("");
    // let [operator, setOperator] = useState("");

    //stores the value of numA

    // const numValue = event => {
    //     setNum(event.target.value);
    // }

    //addition function

    const add = (a, b) => {
        return a + b
    }

    //subtraction function

    const subtract = (a, b) => {
        return a - b
    }

    //multiplication function

    const multiply = (a, b) => {
        return a * b
    }

    //division function

    const divide = (a, b) => {
        return a / b
    }

    //square function

    const square = (a) => {
        return a * a
    }

    //cube function

    const cube = (a) => {
        return a * a * a
    }

    //square root function

    const squareRoot = (a) => {
        return Math.sqrt (a)
    }

    //modulo function

    const modulo = (a, b) => {
        return a % b
    }

    //calculation function

    const calc = () => {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === "+") {
                // setOperator("+")
                setResult(add(Number(result.split("+")[0]), Number(result.split("+")[1])))
            } else if (result[i] === "-") {
                // setOperator("-")
                setResult(subtract(Number(result.split("-")[0]), Number(result.split("-")[1])))
            } else if (result[i] === "*") {
                // setOperator("*")
                setResult(multiply(Number(result.split("*")[0]), Number(result.split("*")[1])))
            } else if (result[i] === "/") {
                // setOperator("/")
                setResult(divide(Number(result.split("/")[0]), Number(result.split("/")[1])))
            } else if (result[i] === "²") {
                // setOperator("²")
                setResult(square(Number(result.split("²")[0])))
            } else if (result[i] === "³") {
                // setOperator("³")
                setResult(cube(Number(result.split("³")[0])))
            }else if (result[i] === "√") {
                // setOperator("√")
                setResult(squareRoot(Number(result.split("√")[1])))
            } else if (result[i] === "%") {
                // setOperator("%")
                setResult(modulo(Number(result.split("%")[0]), Number(result.split("%")[1])))
            }
        }
    }

    return (
        <div className='container'>
            <div className='calculator'>
                <div className='decorations'>
                    <h1 className='corpName'>PandaCo C4LQL8R</h1>
                    <div className='solarPanel'>
                        <div className='solarPanel__line'></div>
                        <div className='solarPanel__line'></div>
                        <div className='solarPanel__line'></div>
                    </div>
                </div>
                <div className='calculatorResult'>
                    <h1 className="result">{result}</h1>
                </div>
                <div>
                </div>
                <div className='calculatorButtons'>
                    <button className="button__Clear" onClick={() => setResult("")}>⌫</button>
                    <button className="button" onClick={() => setResult(result + "(")}>(</button>
                    <button className="button" onClick={() => setResult(result + ")")}>)</button>
                    <button className="button" onClick={() => setResult(result + "%")}>mod</button>
                    <button className="button"  onClick={() => setResult("√" + result)}>√</button>
                    <button className='button' onClick={() => setResult(result + "7")}>7</button>
                    <button className='button' onClick={() => setResult(result + "8")}>8</button>
                    <button className='button' onClick={() => setResult(result + "9")}>9</button>
                    <button className="button" onClick={() => setResult(result + "/")}>/</button>
                    <button className="button" onClick={() => setResult(result + "²")}>X²</button>
                    <button className='button' onClick={() => setResult(result + "4")}>4</button>
                    <button className='button' onClick={() => setResult(result + "5")}>5</button>
                    <button className='button' onClick={() => setResult(result + "6")}>6</button>
                    <button className="button" onClick={() => setResult(result + "*")}>*</button>
                    <button className="button" onClick={() => setResult(result + "³")}>X³</button>
                    <button className='button' onClick={() => setResult(result + "1")}>1</button>
                    <button className='button' onClick={() => setResult(result + "2")}>2</button>
                    <button className='button' onClick={() => setResult(result + "3")}>3</button>
                    <button className="button" onClick={() => setResult(result + "-")}>-</button>
                    <button onClick={calc} className="button__Calculate">=</button>
                    <button className='button__zero' onClick={() => setResult(result + "0")}>0</button>
                    <div className='filler'></div>
                    <button className='button' onClick={() => setResult(result + ".")}>.</button>
                    <button className="button" onClick={() => setResult(result + "+")}>+</button>
                </div>
            </div>
        </div >
    )
}

export default Calculator;