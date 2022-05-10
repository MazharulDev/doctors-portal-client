import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryBtn from '../shared/PrimaryBtn/PrimaryBtn';
const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;