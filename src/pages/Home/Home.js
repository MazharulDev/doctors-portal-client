import React from 'react';
import Banner from '../Banner/Banner';
import Treatment from './Treatment/Treatment';
import Info from './Info/Info';
import Service from './Service/Service';
import AppointmentSection from '../AppointmentSection/AppointmentSection';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Service/>
            <Treatment/>
            <AppointmentSection/>
            <Testimonial/>
        </div>
    );
};

export default Home;