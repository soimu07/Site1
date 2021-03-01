import React from 'react';

const Button = ({ text, onButtonClick }) => {
    return (
        <button onClick={ onButtonClick }>{text}</button>
    )
}

export default Button;