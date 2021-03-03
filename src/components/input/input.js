import React from 'react';
import './input.css'

const Input = ( { placeholdertext, onInputChange, type, errorMessage } ) => {
    return ( 
        <div className='inputWrapper'>
        <input className='inputContainer' placeholder={ placeholdertext } onChange={ onInputChange } type={type || 'text'}></input>
        {errorMessage && <span className='errorMessage'>{errorMessage}</span>}        
        </div>
    )
}

export default Input;