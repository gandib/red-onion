import React from 'react';
import Foods from '../../Foods/Foods';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import DisplayFood from '../DisplayFood/DisplayFood';
import PersonDisplay from '../PersonDisplay/PersonDisplay';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <DisplayFood></DisplayFood>
            <Foods></Foods>
            <PersonDisplay></PersonDisplay>
        </div >
    );
};

export default Home;