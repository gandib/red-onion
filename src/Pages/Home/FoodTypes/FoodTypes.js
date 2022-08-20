import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './FoodTypes.css';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import DisplayFood from '../DisplayFood/DisplayFood';

const FoodTypes = () => {
    const foodPages = [
        { id: 1, name: 'Breakfast', path: 'breakfast' },
        { id: 2, name: 'Lunch', path: 'lunch' },
        { id: 3, name: 'Dinner', path: 'dinner' },
    ];

    return (
        <div>
            {/* <Banner></Banner> */}
            <div className='showfood-pages'>
                {/* <div >
                    <Link to='/foodtypes/breakfast'>Breakfast</Link>
                </div>
                <div>
                    <Link to='/foodtypes/lunch'>Lunch</Link>
                </div>
                <div>
                    <Link to='/foodtypes/lunch'>Dinner</Link>
                </div> */}
                {
                    foodPages.map(foodPage => <CustomLink
                        key={foodPage.id}
                        to={`/foodtypes/${foodPage.path}`}
                    >{foodPage.name}</CustomLink>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default FoodTypes;