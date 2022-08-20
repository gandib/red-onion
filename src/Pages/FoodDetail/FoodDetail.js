import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FoodTypes from '../Home/FoodTypes/FoodTypes';
import './FoodDetail.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faAngleRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ProductsContext } from '../../App';
import useCart from '../../hooks/useCart';
import { addQuantityToDb } from '../../utilities/fakedb';
import PageTitle from '../Shared/PageTitle/PageTitle';

const FoodDetail = () => {
    const [value, setValue] = useState(0);
    const [secondValue, setSecondValue] = useState(1);
    const [inputValues, setInputValues] = useState(1);
    const { foodDetailId } = useParams();
    const [products] = useContext(ProductsContext);
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();


    const inputValue = (e) => {
        setInputValues(e.target.value);
    }
    const inputMinus = () => {
        if (inputValues > 1) {
            setInputValues(inputValues - 1);
        }
    }
    const inputPlus = () => {
        setInputValues(inputValues + 1);
    }

    const handleAddToCart = (selectedProduct, value) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addQuantityToDb(selectedProduct.id, value);
        // addToDb(selectedProduct.id)
        navigate('/cart');
    }

    const imageChange = () => {
        if (foodDetailId <= 6) {
            setValue(value + 1);
            setSecondValue(secondValue + 1);
            if (value === 5) {
                setValue(0);
            }
            if (secondValue === 5) {
                setSecondValue(0);
            }
        }
        if (foodDetailId >= 7 && foodDetailId <= 12) {
            setValue(value + 1);
            setSecondValue(secondValue + 1);
            if (value === 5) {
                setValue(0);
            }
            if (secondValue === 5) {
                setSecondValue(0);
            }
        }
        if (foodDetailId >= 13 && foodDetailId <= 18) {
            setValue(value + 1);
            setSecondValue(secondValue + 1);
            if (value === 5) {
                setValue(0);
            }
            if (secondValue === 5) {
                setSecondValue(0);
            }
        }

    }

    console.log(products)
    console.log(cart)

    if (foodDetailId) {
        const existProduct = products.find(product => product.id === JSON.parse(foodDetailId));

        const foodIndex = products[JSON.parse(foodDetailId - 1)];
        return (
            <div>
                <PageTitle title='Food Detail'></PageTitle>
                <FoodTypes></FoodTypes>

                <div className='container'>
                    <div className='container text-start  row d-flex justify-content-center mt-5 mb-5'>
                        <div className='col-6'>
                            <h1>{foodIndex.name}</h1>
                            <p>{foodIndex.desc}</p>
                            <p>{foodIndex.desc}</p>
                            <p>{foodIndex.desc}</p>
                            <h3 className='foodDetail-price'>${foodIndex.price} <span className='ms-5'><button onClick={inputMinus} className='foodDetail-decrease'>
                                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                            </button><input onClick={inputValue} className='foodDetail-input' type="text" value={inputValues} /><button onClick={inputPlus} className='foodDetail-increase'>
                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </button></span></h3>
                            <div className='container '>
                                <button onClick={() => handleAddToCart(existProduct, inputValues)} className='d-flex btn btn-danger text-start mt-4 foodDetail-add-btn justify-content-center align-items-center'>
                                    <FontAwesomeIcon className='me-2' icon={faCartShopping}></FontAwesomeIcon>Add</button>
                            </div>

                            {foodDetailId >= 1 && foodDetailId <= 6 && <div className='container d-flex mt-5 justify-content-center align-items-center'>
                                <img className='w-25 me-3' src={products[value].img} alt="" />
                                <img className='w-25 me-3' src={products[secondValue].img} alt="" />
                                <button className='foodDetail-next-image-btn' onClick={imageChange}>
                                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                                </button>
                            </div>}
                            {foodDetailId >= 7 && foodDetailId <= 12 && <div className='container d-flex mt-5 justify-content-center align-items-center'>
                                <img className='w-25 me-3' src={products[value + 6].img} alt="" />
                                <img className='w-25 me-3' src={products[secondValue + 6].img} alt="" />
                                <button className='foodDetail-next-image-btn' onClick={imageChange}>
                                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                                </button>
                            </div>}
                            {foodDetailId >= 13 && foodDetailId <= 18 && <div className='container d-flex mt-5 justify-content-center align-items-center'>
                                <img className='w-25 me-3' src={products[value + 12].img} alt="" />
                                <img className='w-25 me-3' src={products[secondValue + 12].img} alt="" />
                                <button className='foodDetail-next-image-btn' onClick={imageChange}>
                                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                                </button>
                            </div>}

                        </div>
                        <div className='col-6'>
                            <img className='w-75' src={foodIndex.img} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        );

    }
};

export default FoodDetail;