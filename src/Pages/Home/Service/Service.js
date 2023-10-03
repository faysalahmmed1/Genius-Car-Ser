import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigete = useNavigate();
    const navigeteToDetails = id => {
        navigete (`/service/${id}`);

    }
    return (
        <div className='service-container'>
            <img className='w-100' src={img}></img>
            <h1>this is mini Service!! {name}</h1>
            <p>{description}</p>
            <h3> {price}</h3>
            <button onClick={() => navigeteToDetails(id)} className='button'>{name}</button>

        </div>
    );
};

export default Service;