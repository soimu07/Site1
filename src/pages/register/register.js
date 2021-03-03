import React from 'react';
import RegisterForm from '../../components/register-form';
import './register.css';

const Register = () => {
    return(
        <div className='registerContainer'>
            <div className='registerWrapper'>
                <div className='pageTitle'>Never look back</div>
                <RegisterForm></RegisterForm>
            </div>
        </div>
        )
}

export default Register;