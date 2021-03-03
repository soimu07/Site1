import React from 'react';
import LoginForm from '../../components/login-form'
import './login.css';

const Login = () => {
    return(
     <div className='loginContainer'>
        <div className='loginWrapper'>
            <div className='pageTitle'>Never look back</div>
            <LoginForm></LoginForm>
        </div>
     </div>
    )
};

export default Login;