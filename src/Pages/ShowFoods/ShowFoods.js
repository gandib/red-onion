import React from 'react';

import './ShowFoods.css';

const ShowFoods = ({ product }) => {


    return (
        <div>
            <img src={product.img} alt="" />
            <h5>{product.name}</h5>
            <p>{product.desc}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ShowFoods;