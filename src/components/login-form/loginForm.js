import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input';
import Button from '../button';
import { loginUserAction } from '../../actions/actions';
import Preloader from '../preloader'

const LoginForm = ( { history } ) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const validateForm = () => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValidation = emailRegex.test(String(email).toLowerCase());
        setIsEmailValid(emailValidation);   
        
        const passwordLength = password.length >= 5
        setIsPasswordValid(passwordLength);

        if ( emailValidation && passwordLength ) {
            setIsLoading(true);            
            loginUserAction(email, password, dispatch, history)
           
        }
    }

    return (
        <div>
            { !isLoading && (
                <div>
                <h2>Welcome back!</h2>
                <Input key='email' placeholdertext='E-mail' onInputChange={(event) =>{setEmail(event.target.value)}}/>
                <Input key='password' placeholdertext='Password' onInputChange={(event) =>{setPassword(event.target.value)}}/>
                <Button onButtonClick={() => validateForm()} text='Login'/>
                </div> 
                )}  
            { isLoading && (
               <Preloader/>
            )}
            
        </div>
    );
}

export default LoginForm;