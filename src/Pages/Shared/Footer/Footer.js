import React from 'react';
import './Footer.css';
import logo from '../../../images/images/logo.png';

const Footer = () => {
    return (
        <div className=' footer-color'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <div className='col-6'>
                        <img className='w-50' src={logo} alt="" />
                    </div>

                </div>
                <div className='col-6 d-flex mt-5'>
                    <div className='col-6'>
                        <h6>About online food</h6>
                        <h6>Read our blog</h6>
                        <h6>Sign up to deliver</h6>
                        <h6>Add your redtaurant</h6>
                    </div>
                    <div className='col-6'>
                        <h6>Get help</h6>
                        <h6>Reads FAQS</h6>
                        <h6>View all cities</h6>
                        <h6>Restaurants near me</h6>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='col-6 mt-5 mb-3'>
                        <p>Copyright &copy; {new Date().getFullYear()}</p>
                    </div>
                </div>
                <div className='col-6 d-flex mt-5 mb-3'>
                    <div className='col-4'>
                        <h6>Privacy Policy</h6>
                    </div>
                    <div className='col-4'>
                        <h6>Terms of Use</h6>
                    </div>
                    <div className='col-4'>
                        <h6>Pricing</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;