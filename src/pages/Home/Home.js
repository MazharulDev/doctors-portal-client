import React from 'react';
import Banner from '../Banner/Banner';
import Treatment from './Treatment/Treatment';
import Info from './Info/Info';
import Service from './Service/Service';
import AppointmentSection from '../AppointmentSection/AppointmentSection';
import Testimonial from '../Testimonial/Testimonial';
import ContactSection from './ContactSection/ContactSection';
import Footer from '../shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Service/>
            <Treatment/>
            <AppointmentSection/>
            <Testimonial/>
            <ContactSection/>
            <Footer/>
        </div>
    );
};

export default Home;