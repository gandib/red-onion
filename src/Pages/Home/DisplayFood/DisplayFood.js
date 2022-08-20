import React from 'react';
import './DisplayFood.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';


const DisplayFood = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const navigate = useNavigate();
    const { foodId } = useParams();
    const [products] = useProducts();

    const selectItem = id => {
        setSelectedItem(id);
    }
    const handleNavigate = () => {
        if (selectedItem !== 0) {
            navigate(`/fooddetail/${selectedItem}`);
        }
    }

    if (foodId === 'breakfast') {
        return (
            <div>
                <PageTitle title='Display Food'></PageTitle>
                <div className='container displayFood-container'>
                    {
                        products.slice(0, 6).map(product => <div tabIndex='1' className='select-item-style' onClick={() => selectItem(product.id)}
                            key={product.id}>
                            <img src={product.img} alt="" />
                            <h5>{product.name}</h5>
                            <p>{product.desc}</p>
                            <p>${product.price}</p>
                        </div>)
                    }
                </div>
                <button onClick={handleNavigate} className='checkout-btn'>Checkout Your Food</button>
            </div>
        );
    }
    else if (foodId === 'lunch') {
        return (
            <div>
                <PageTitle title='Display Food'></PageTitle>
                <div className='container displayFood-container'>
                    {
                        products.slice(6, 12).map(product => <div tabIndex='1' className='select-item-style' onClick={() => selectItem(product.id)}
                            key={product.id}>
                            <img src={product.img} alt="" />
                            <h5>{product.name}</h5>
                            <p>{product.desc}</p>
                            <p>${product.price}</p>
                        </div>)
                    }
                </div>
                <button onClick={handleNavigate} className='checkout-btn'>Checkout Your Food</button>
            </div>
        );
    }
    else if (foodId === 'dinner') {
        return (
            <div>
                <PageTitle title='Display Food'></PageTitle>
                <div className='container displayFood-container'>
                    {
                        products.slice(12, 18).map(product => <div tabIndex='1' className='select-item-style' onClick={() => selectItem(product.id)}
                            key={product.id}>
                            <img src={product.img} alt="" />
                            <h5>{product.name}</h5>
                            <p>{product.desc}</p>
                            <p>${product.price}</p>
                        </div>)
                    }
                </div>
                <button onClick={handleNavigate} className='checkout-btn'>Checkout Your Food</button>
            </div>
        );
    }

};

export default DisplayFood;