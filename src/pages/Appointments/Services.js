import { format } from 'date-fns';
import React from 'react';

const Services = ({ date }) => {
    return (
        <div>
            <div>
                <h3 className='text-center font-bold text-secondary mb-20'>Available Appointments on {format(date, 'PP')}</h3>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Services;