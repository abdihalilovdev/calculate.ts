import React from 'react';
import './Button.css'


const Button = ({symbol,color,handleClick}: any) => {
    return <div
        onClick={() => handleClick(symbol)}
        className='button-wrapper' style={{
        background:color
    }}>{symbol}</div>
};

export default Button;