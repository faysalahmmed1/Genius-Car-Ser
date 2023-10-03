import React from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocallogIn from '../SocallogIn/SocallogIn';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

let errorElemnet;


// const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);


const restPassword = async () => {


}

// if (error) {
//     errorElemnet = <p className='text-danger'>Error: {error?.message}</p>

// }


const Login = () => {
    return (
        <div className=''>
            <h1 className='text-primary mt-2'>Loooooog in</h1>
            <Form className='Login-container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>New account <Link className='text-decoration-none ' to={'/register'}>please Register</Link></p>
                <p>Forget Password<Link className='text-decoration-none ' onclick={restPassword} to={'/register'}>Forget Password</Link></p>
            </Form>
            {errorElemnet}
            <SocallogIn></SocallogIn>



        </div>
    );
};

export default Login;