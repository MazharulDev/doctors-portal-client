import React from 'react';
import doctor from '../../assets/images/doctor.png'
import PrimaryBtn from '../shared/PrimaryBtn/PrimaryBtn';
import './AppointmentSection.css'

const AppointmentSection = () => {
    return (
        <section className='flex justify-center items-center bg my-12 px-12 py-8 lg:py-0'>
            
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-150px]' src={doctor} alt="" />
                </div>
                <div className='flex-1'>
                    <h3 className='text-primary text-lg font-bold mb-3'>Appointment</h3>
                    <h2 className='text-3xl font-bold text-white'>Make an Appointment Today</h2>
                    <p className='text-white my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            

        </section>
    );
};

export default AppointmentSection;