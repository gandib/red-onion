import React from 'react';
import './Banner.css';
import background from '../../../images/images/bannerbackground1.png'

const Banner = () => {

    return (
        <div>
            <section className='banner-background ' style={{ backgroundImage: `url(${background})` }}>
                <div className='banner-title'>
                    <h1 >Best food waiting for your belly</h1>
                    <input className='banner-input' type="text" placeholder='Search food item' />
                    <button className='banner-search-btn'>Search</button>
                </div>
            </section>


        </div>
    );
};

export default Banner;