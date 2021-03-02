import React from 'react';
import './button.css';

const Button = ({ text, onButtonClick }) => {
    return (
        <button className='buttonContainer' onClick={ onButtonClick }>{text}</button>
    )
}

export default Button;