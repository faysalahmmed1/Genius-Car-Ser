import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import SocallogIn from '../SocallogIn/SocallogIn';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// const [agree, setAgree] = useState(false);

const Register = () => {

    const handleRegister = (event) => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        //     if (agree) {

        //         createUserWithEmailAndPassword(email, password);
        //     }
    }


    return (

        <div className='Input-conteiner'>
            <h1 className='text-primary mt-2'> Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type='Name' name='Name' id='#' placeholder='Enter your Name'></input>
                <input type='email' name='email' id='#' placeholder='Enter your Email'></input>
                <input type='Password' name='Password' id='#' placeholder='Enter your Password'></input>
                <input type='checkbox' name='terms' id='terms'></input>
                <label htmlFor='terms'> Accept  Terms And Condition</label>
                <input className='btn btn-primary' type='Submit' name='submit' id='#'></input>
            </form>
            <p>Already Account <Link className='text-decoration-none' to={'/login'}>Please Login</Link></p>
            <SocallogIn></SocallogIn>

        </div>

    );
};

export default Register;