import React from 'react';

const ServiceItem = ({ serviceItem, setTreatment }) => {
    const { name, slots } = serviceItem;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots[0] ? slots[0] : <span className='text-red-500'>Not Available</span>}</p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions">
                    <label onClick={() => setTreatment(serviceItem)} disabled={slots.length < 1} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" htmlFor="treatment-modal">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;