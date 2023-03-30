import './input.css'

import React from 'react';

const Input = ({text,result}:any) => {
    return <div className='input-wrapper'>
        <div className="result">
            <h1>{result}</h1>
        </div>
        <div className="text">
            <h3>{text}</h3>
        </div>
    </div>
};

export default Input;