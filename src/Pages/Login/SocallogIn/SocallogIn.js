import React from 'react';
import './SocallogIn.css';
import google from '../../../images/google/google.png'
import facebok from '../../../images/Facebook/facebook.avif'
import github from '../../../images/Github/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocallogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElemnet;
    if (error || error1) {
        errorElemnet = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>

    }

    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
                <p className='mb-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 mx-auto d-block my-2 mb-2'>
                    <img className='img' src={google}></img>
                    Google</button>
                <button className='btn btn-primary w-50 mx-auto d-block my-2 mb-2'>
                    <img className='img' src={facebok}></img>
                    Facebook</button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary w-50 mx-auto d-block my-2 mb-2'>
                    <img className='img' src={github}></img>
                    Github</button>
            </div>
        </div>
    );
};

export default SocallogIn;