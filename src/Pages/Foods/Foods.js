import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ShowFoods from '../ShowFoods/ShowFoods';

const Foods = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const navigate = useNavigate();
    const [products] = useProducts();

    const [activeIndex, setActiveIndex] = useState(2);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";

    const selectItem = id => {
        setSelectedItem(id);
    }
    const handleNavigate = () => {
        if (selectedItem !== 0) {
            navigate(`/fooddetail/${selectedItem}`);
        }
    }
    return (
        <div>
            <>
                <div className="tabs mt-5">
                    <button
                        className={`tab ${checkActive(1, "active")}`}
                        onClick={() => handleClick(1)}
                    >
                        Breakfast
                    </button>
                    <button
                        className={`tab ${checkActive(2, "active")}`}
                        onClick={() => handleClick(2)}
                    >
                        Lunch
                    </button>
                    <button
                        className={`tab ${checkActive(3, "active")}`}
                        onClick={() => handleClick(3)}
                    >
                        Dinner
                    </button>
                </div>

                <div className="panels">
                    <div className={`panel ${checkActive(1, "active")}`}>
                        <div className='container displayFood-container'>
                            {
                                products.slice(0, 6).map(product => <div tabIndex='1' className='select-item-style' onClick={() => selectItem(product.id)}>
                                    <ShowFoods
                                        key={product.id}
                                        product={product}></ShowFoods>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className={`panel ${checkActive(2, "active")}`}>
                        <div className='container displayFood-container'>
                            {
                                products.slice(6, 12).map(product => <div tabIndex='1' className='select-item-style' onClick={() => selectItem(product.id)}>
                                    <ShowFoods
                                        key={product.id}
                                        product={product}></ShowFoods>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className={`panel ${checkActive(3, "active")}`}>
                        <div className='container displayFood-container'>
                            {
                                products.slice(12, 18).map(product => <div tabIndex='1' className='select-item-style' onClick={() => selectItem(product.id)}>
                                    <ShowFoods
                                        key={product.id}
                                        product={product}></ShowFoods>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <button onClick={handleNavigate} className='checkout-btn'>Checkout Your Food</button>
            </>
        </div>
    );
};

export default Foods;