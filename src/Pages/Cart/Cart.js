import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../App';
import useCart from '../../hooks/useCart';
import { addToDb, removeQuantityToDb } from '../../utilities/fakedb';
import CartItems from '../CartItems/CartItems';
import FoodTypes from '../Home/FoodTypes/FoodTypes';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Cart.css';

const Cart = () => {
    const [products] = useContext(ProductsContext);
    const [cart, setCart] = useCart(products);
    const [quantities, setQuantities] = useState();
    const navigate = useNavigate();

    let subTotal = 0;
    let quantity = 0;
    let deliveryFee = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        subTotal = subTotal + (product.price * product.quantity);
        deliveryFee = deliveryFee + (product.deliveryFee * product.quantity);
    }
    console.log(cart)
    const tax = (subTotal * 0.1);
    const total = (subTotal + deliveryFee + tax);

    const handleMinus = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id);
        //setQuantities used here just update the state everytime
        setQuantities(exists.quantity);
        if (exists.quantity >= 2) {
            exists.quantity = exists.quantity - 1;
            removeQuantityToDb(selectedProduct.id);
        }
    }
    const handlePlus = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id);
        //setQuantities used here just update the state everytime
        setQuantities(exists.quantity);
        exists.quantity = exists.quantity + 1;
        addToDb(selectedProduct.id);
    }

    const navigateToPlaceOrder = () => {
        navigate('/order');
    }


    return (
        <div>
            <PageTitle title='Cart'></PageTitle>
            <FoodTypes></FoodTypes>
            <div className='container row mt-5'>
                <div className='container col-4 deliver-detail-container'>
                    <h5 className='text-start delivery-title'>Edit Delivery Details</h5>
                    <div className='divider'></div>
                    <input type="text" name="" id="" /> <br />
                    <input type="text" name="" id="" /><br />
                    <input type="text" name="" id="" placeholder='Flat, suit or floor' /><br />
                    <input type="text" name="" id="" placeholder='Business name' /><br />
                    <input className='input-description' type="text" name="" id="" placeholder='Add delivery instructor' /><br />
                    <button className='cart-save-btn'>Save & Continue</button>
                </div>
                <div className='col-2'>

                </div>
                <div className='col-4 cart-container'>
                    <div className='text-start'>
                        <h6>From <span className='place-name'>Gulshan Plaza Restaura GPR</span></h6>
                        <p className='places-desc'>Ariving in 20-30 min</p>
                        <p>107 Rd No 8</p>
                    </div>
                    {
                        cart.map(product => <CartItems
                            key={product.id}
                            product={product}
                            handleMinus={handleMinus}
                            handlePlus={handlePlus}
                        // productQuantity={productQuantity}
                        ></CartItems>)
                    }
                    <div className='container total-container'>
                        <div className='total-prices subtotal'>
                            <p >Subtotal-{quantity} item </p>
                            <p >${subTotal.toFixed(2)}</p>
                        </div>
                        <div className='total-prices'>
                            <p>Tax</p>
                            <p>${tax.toFixed(2)}</p>
                        </div>
                        <div className='total-prices'>
                            <p>Delivery Fee</p>
                            <p>${deliveryFee}</p>
                        </div>
                        <div className='total-prices'>
                            <p>Total</p>
                            <p>${total.toFixed(2)}</p>
                        </div>
                    </div>
                    <button onClick={navigateToPlaceOrder} className='placeOrder-btn'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;