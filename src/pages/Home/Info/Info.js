import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import call from '../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
           <InfoCard bg="bg-gradient-to-r from-secondary to-primary" title='Opening Hours' img={clock} text='Lorem Ipsum is simply dummy text of the pri'/>
           <InfoCard bg="bg-accent" title='Visit our Location'img={location} text='Brooklyn, NY 10036, United States' />
           <InfoCard bg="bg-gradient-to-r from-secondary to-primary" title='Contact us now'img={call} text='+880123456789' />
        </div>
    );
};

export default Info;