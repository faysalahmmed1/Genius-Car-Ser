import React, { useEffect, useState } from 'react';
import carRepier from '../../../Image/car repier1.png.png'
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services , setServices] = useState([]);
    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    return (
        <div id='services' className='container'>
                <h1 className='services-tittal'>Our Services</h1>

               <div className='services-container'>
               {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
               </div>
        </div>
    );
};

export default Services;