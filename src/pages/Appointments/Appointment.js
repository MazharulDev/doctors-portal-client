import React, { useState } from 'react';
import Footer from '../shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import Services from './Services';

const Appointment = () => {
    const [date,setDate]=useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <Services date={date}/>
            <Footer/>
        </div>
    );
};

export default Appointment;