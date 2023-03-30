import React, {useState} from 'react';
import Button from "./components/Button";
import Input from "./components/input";
import {evaluate} from "mathjs";
import * as math from "mathjs";

const App = () => {

    const buttonColor = '#f2a33c'

    const [text, setText] = useState('')
    const [result, setResult] = useState('')

    const addToText = (val: string) => {
        setText((text): any => [text, val + ' '])
    }

    const calculateResult = () => {
        const input = text //.join('')  /** Remote commas **/
        console.log(text)
        setResult(math.evaluate(input))
    }

    const resetInput = () => {
        setText('');
        setResult('')
    }

    return (
        <div className="App">
            <div className="calc-wrapper">
                <Input text={text} result={result}/>
                <div className="row">
                    <Button symbol='7' handleClick={addToText}/>
                    <Button symbol='8' handleClick={addToText}/>
                    <Button symbol='9' handleClick={addToText}/>
                    <Button symbol='/' color={buttonColor} handleClick={addToText}/>
                </div>
                <div className="row">
                    <Button symbol='4' handleClick={addToText}/>
                    <Button symbol='5' handleClick={addToText}/>
                    <Button symbol='6' handleClick={addToText}/>
                    <Button symbol='*' color={buttonColor} handleClick={addToText}/>
                </div>
                <div className="row">
                    <Button symbol='1' handleClick={addToText}/>
                    <Button symbol='2' handleClick={addToText}/>
                    <Button symbol='3' handleClick={addToText}/>
                    <Button symbol='+' color={buttonColor} handleClick={addToText}/>
                </div>
                <div className="row">
                    <Button symbol='0' handleClick={addToText}/>
                    <Button symbol='.' handleClick={addToText}/>
                    <Button symbol='=' handleClick={calculateResult}/>
                    <Button symbol='-' handleClick={addToText} color={buttonColor}/>
                </div>
                <Button symbol='Clear' color='red' handleClick={resetInput}/>
            </div>
        </div>
    );
}

export default App;
