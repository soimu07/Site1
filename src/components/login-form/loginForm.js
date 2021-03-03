import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input';
import Button from '../button';
import { loginUserAction } from '../../actions/actions';
import Preloader from '../preloader'
import './loginForm.css';

const LoginForm = ( { history } ) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const validateForm = () => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValidation = emailRegex.test(String(email).toLowerCase());
        setIsEmailValid(emailValidation);       

        const passwordLength = password && password.length >= 5       
        setIsPasswordValid(passwordLength);

        if ( emailValidation && passwordLength ) {
            setIsLoading(true);            
            loginUserAction(email, password, dispatch, history)          
        }
        
    }
    return (
        <div className='loginFormContainer'>
            { !isLoading && (
                <div className='loginForm'>
                    <h2 className='loginFormTitle'>Welcome back!</h2>
                    <Input key='email' type='text' placeholdertext='E-mail' errorMessage={isEmailValid ? null : 'Email format is incorrect'} onInputChange={(event) =>{setEmail(event.target.value)}}/>
                    <Input key='password' type='password' errorMessage={isPasswordValid ? null : 'Minimum of 5 characters required'} placeholdertext='Password' onInputChange={(event) =>{setPassword(event.target.value)}}/>
                    <div className='logInButtonContainer'>
                        <Button onButtonClick={() => validateForm()} text='Login'/>
                    </div>
                    <p className='notAMember' onClick={()=>history.push('./register')}>New around here? Sign up now</p>
                </div> 
            )}  
            { isLoading && (
               <Preloader />
            )}
            
        </div>
    );
}

export default LoginForm;