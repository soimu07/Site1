import React from 'react';
import './button.css';

const Button = ({ text, onButtonClick, disabled, backgroundColor}) => {
    return (
        <button className={`buttonContainer ${backgroundColor === 'grey' ? 'grey' : ''}`} onClick={ onButtonClick } disabled={disabled} >{text}</button>
    )
}

export default Button;