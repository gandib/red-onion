import React from 'react';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


const CartItems = ({ product, handleMinus, handlePlus }) => {
    const { name, img, price, quantity } = product;


    return (
        <div className='container cartItem-container'>
            <div className='items-container'>
                <img src={img} alt="" />
                <div className='cartItem-title'>
                    <p title={name} className='cartItem-name'>{name.slice(0, 23)}</p>
                    <p className='cartItem-price'>${price}</p>
                </div>
            </div>
            <div className='cartItem-input'>
                <button onClick={() => handleMinus(product)}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                <input type="text" value={quantity} />
                <button onClick={() => handlePlus(product)}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default CartItems;