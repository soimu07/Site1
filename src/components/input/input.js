import React from 'react';

const Input = ( { placeholdertext, onInputChange } ) => {
    return ( 
        <input placeholder={ placeholdertext } onChange={ onInputChange }></input>
    )
}

export default Input;