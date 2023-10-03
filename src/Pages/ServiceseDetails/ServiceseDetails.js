import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceseDetails = () => {
    const {serviceId} = useParams;
    return (
        <div>
            <h1>hello servicese Details: {serviceId} </h1>
        </div>
    );
};

export default ServiceseDetails;