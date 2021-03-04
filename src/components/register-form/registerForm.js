import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input';
import Button from '../button';
import { registerUserAction } from '../../actions/actions';
import Preloader from '../preloader';
import './registerForm.css';


const RegisterForm = ({history}) =>{
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordVerify, setPasswordVerify] = useState(false);
const [isEmailValid, setIsEmailValid] = useState(true);
const [passwordsMatch, setPasswordsMatch] = useState(true);
const [passwordLength, setPasswordLength] = useState(true);
const [passwordRepeatLength, setPasswordRepeatLength] = useState(true);
const [isLoading, setIsLoading] = useState(false);
const [termsChecked, setTermsChecked] = useState(false);

const dispatch = useDispatch();

const validateForm= () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidation = emailRegex.test(String(email).toLowerCase());
    setIsEmailValid(emailValidation);   
   
    const passwordLengthValid = password.trim() && password.trim().length >= 5;
    setPasswordLength(passwordLengthValid);
   
    const passwordRepeatLengthValid = passwordVerify && passwordVerify.trim().length >= 5;
    setPasswordRepeatLength(passwordRepeatLengthValid)  
    
    const passwordMatchValidation = passwordLengthValid && passwordRepeatLengthValid && password === passwordVerify;
    setPasswordsMatch(passwordMatchValidation);

    if (emailValidation && passwordMatchValidation && termsChecked) {
        setIsLoading(true);
        registerUserAction(email.trim(), password.trim(), passwordVerify, dispatch, history)
    }
}

    let passwordsMatchError = passwordRepeatLength?null:'Minimum of 5 characters required' ;
    if (!passwordsMatch && passwordLength && passwordRepeatLength){
        passwordsMatchError = 'Passwords don`t match'
    }

   

    return(
        <div className='registerFormContainer'>
            {!isLoading && (
                <div className='registerForm'>
                    <h2 className='registerFormTitle'>Join us now!</h2>
                    <Input key='email' placeholdertext='E-mail' errorMessage={isEmailValid ? null : 'Email format is incorrect'} onInputChange={(event)=>{setEmail(event.target.value)}}/>
                    <Input key='password' type='password' errorMessage={passwordLength ? null : 'Minimum of 5 characters required'} placeholdertext='Password' onInputChange={(event)=>{setPassword(event.target.value)}}/>
                    <Input key='passwordRepeat' type='password' errorMessage={passwordsMatchError} placeholdertext='Repeat Password' onInputChange={(event)=>{setPasswordVerify(event.target.value)}}/>
                    <div className='termsContainer'>
                        <input className='termsCheckbox' type="checkbox" onChange={()=>setTermsChecked(!termsChecked)} id="terms" name="terms" value="terms"></input>
                        <label className='terms' htmlFor="terms">I agree to no <b>Terms and Conditions</b> <br></br>and <b>Privacy Policy</b>.</label><br></br>
                    </div>
                    <div className='registerFormButtonContainer'>
                        <Button onButtonClick={()=>validateForm()} text='Create Account'/>
                    </div>
                    <p className='alreadyAMember' onClick={()=>history.push('./login')}>Already a member? Sign in</p>
                 </div>
            )}
            { isLoading && (
                <Preloader/>
            )}      
        </div>
    )
}

export default RegisterForm;