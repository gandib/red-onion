import React from 'react';
import MyLocation from '../MyLocation/MyLocation';
import PageTitle from '../Shared/PageTitle/PageTitle';
import bike from '../../../src/images/images/Group 1151.png';
import katlery from '../../../src/images/images/Group 1152.png';
import './Order.css';
import FoodTypes from '../Home/FoodTypes/FoodTypes';

const Order = () => {
    return (
        <div>
            <PageTitle title='Order'></PageTitle>
            <FoodTypes></FoodTypes>
            <div className='container row mb-5 mt-5'>
                <div className='col-2'></div>
                <div className='col-7'>
                    <MyLocation></MyLocation>
                </div>
                <div className='col-3 contact-container'>
                    <div>
                        <img className=' contact-bike' src={bike} alt="" />
                    </div>
                    <div className='location-container'>
                        <h6>Your location</h6>
                        <p>107 Rd No 8</p>
                        <h6>Shop Address</h6>
                        <p>Gulshan Plaza Restaura GPR</p>
                    </div>
                    <div className='delivery-time'>
                        <h4>9:30</h4>
                        <h6>Estimated delivery time</h6>
                    </div>
                    <div className='d-flex raider'>
                        <div>
                            <img className='katlery' src={katlery} alt="" />
                        </div>
                        <div className='raider-title'>
                            <h6 className='raider-name'>Hamim</h6>
                            <p className='text-start'>Your raider</p>
                        </div>
                    </div>
                    <button className='contact-btn'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Order;