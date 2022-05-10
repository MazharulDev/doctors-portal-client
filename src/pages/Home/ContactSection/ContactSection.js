import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../shared/PrimaryBtn/PrimaryBtn';

const ContactSection = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className="mt-5" >
            <div className='text-center py-8'>
                <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                <h2 className='text-3xl text-white mb-5'>Stay Connect With Us</h2>
                <input type="email" placeholder="Email Address" class="input w-full max-w-xs" /><br />
                <input type="text" placeholder="Subject" class="input w-full max-w-xs my-3" /><br />
                <textarea type="textarea" placeholder="Your Message" class="input input-bordered h-20 w-full max-w-xs mb-5" />
                
                <br />
                <PrimaryBtn>Submit</PrimaryBtn>
            </div>
            
        </section>
    );
};

export default ContactSection;