import React from 'react';
import './button.css';

const Button = ({ text, onButtonClick, disabled }) => {
    return (
        <button className='buttonContainer' onClick={ onButtonClick } disabled={disabled}>{text}</button>
    )
}

export default Button;