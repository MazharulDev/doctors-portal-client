import React from 'react';
import { Link } from 'react-router-dom';
import footerbg from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footerbg})`,
            backgroundSize: 'cover',
            backgroundPosition:'center'
        }}

            class="p-10">
            <div className='footer'>
                <div>
                    <span class="footer-title">Services</span>
                    <Link to='/' class="link link-hover">Branding</Link>
                    <Link to='/' class="link link-hover">Design</Link>
                    <Link to='/' class="link link-hover">Marketing</Link>
                    <Link to='/' class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to="/" class="link link-hover">About us</Link>
                    <Link to="/" class="link link-hover">Contact</Link>
                    <Link to="/" class="link link-hover">Jobs</Link>
                    <Link to="/" class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <Link to='/' class="link link-hover">Terms of use</Link>
                    <Link to='/' class="link link-hover">Privacy policy</Link>
                    <Link to='/' class="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-center mt-20'>
                <p> Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;