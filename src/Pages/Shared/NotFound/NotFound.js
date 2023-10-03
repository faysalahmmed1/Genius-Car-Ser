import React from 'react';
import king from '../../../images/king.jpeg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>NotFound King </h1>
            <img className='w-100' src={king}></img>
        </div>
    );
};

export default NotFound;