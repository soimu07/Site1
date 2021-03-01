import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input';
import Button from '../button';
import { registerUserAction } from '../../actions/actions';
import Preloader from '../preloader'


const RegisterForm = ({history}) =>{
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [passwordVerify, setPasswordVerify] = useState(null);
const [isEmailValid, setIsEmailValid] = useState(false);
const [passwordsMatch, setPasswordsMatch] = useState(false);
const [passwordLength, setPasswordLength] = useState(false);
const [passwordRepeatLength, setPasswordRepeatLength] = useState(false);
const [isLoading, setIsLoading] = useState(false);

const dispatch = useDispatch();

const validateForm= () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidation = emailRegex.test(String(email).toLowerCase());
    setIsEmailValid(emailValidation);   
   
    const passwordLengthValid = password && password.length >= 5;
    setPasswordLength(passwordLengthValid);
   
    const passwordRepeatLengthValid = passwordVerify && passwordVerify.length >= 5;
    setPasswordRepeatLength(passwordRepeatLengthValid)  
    
    const passwordMatchValidation = passwordLengthValid && passwordRepeatLengthValid && password === passwordVerify;
    setPasswordsMatch(passwordMatchValidation);

    if (emailValidation && passwordMatchValidation) {
        setIsLoading(true);
        registerUserAction(email, password, passwordVerify, dispatch, history)
    }

}


   

    return(
        <div>
            {!isLoading && (
                <div>
                    <h2>Join us now!</h2>
                    <Input key='email' placeholdertext='E-mail' onInputChange={(event)=>{setEmail(event.target.value)}}/>
                     <Input key='password' placeholdertext='Password' onInputChange={(event)=>{setPassword(event.target.value)}}/>
                    <Input key='passwordRepeat' placeholdertext='Repeat Password' onInputChange={(event)=>{setPasswordVerify(event.target.value)}}/>
                    <Button onButtonClick={()=>validateForm()} text='Create Account'/>
                </div>)}
            { isLoading && (
                <Preloader/>
            )}      
        </div>
    )
}

export default RegisterForm;