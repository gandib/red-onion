import React from 'react';
import person1 from '../../../images/images/adult-blur-blurred-background-687824.png';
import person2 from '../../../images/images/chef-cook-food-33614.png';
import person3 from '../../../images/images/architecture-building-city-2047397.png';
import busIcon from '../../../images/images/icons/Group 204.png';
import carIcon from '../../../images/images/icons/Group 245.png';
import ringIcon from '../../../images/images/icons/Group 1133.png';
import './PersonDisplay.css';
import { Link } from 'react-router-dom';

const PersonDisplay = () => {
    const persons = [
        { id: 1, name: 'Fast Delivery', desc: 'Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future.', img: person1 },
        { id: 2, name: 'A Good Auto Responder', desc: 'Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future.', img: person2 },
        { id: 3, name: 'Home Delivery', desc: 'Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future.', img: person3 },
    ];
    return (
        <div>
            <h1 className='text-start container'>Why you choose us</h1>
            <h6 className='text-start container'>Barton waited twenty always repair in within we do. An delighted offending <br />
                curiosity my is dashwoods at. Boy prosperous increasing surrounded.</h6>
            <div className='persons container'>
                <div className='person'>
                    <img className='img-fluid' src={person1} alt="" />
                    <div className='row d-flex ms-3 mt-3'>
                        <div className='col-2'>
                            <img className='' src={busIcon} alt="" />
                        </div>
                        <div className='col-9 persons-name-desc'>
                            <h5 className=''>{persons[0].name}</h5>
                            <p>{persons[0].desc}</p>
                            <Link to='/' className='seeMore-btn'>See more</Link>
                        </div>
                    </div>
                </div>
                <div className='person'>
                    <img className='img-fluid' src={person2} alt="" />
                    <div className='row d-flex ms-3 mt-3'>
                        <div className='col-2'>
                            <img className='' src={ringIcon} alt="" />
                        </div>
                        <div className='col-9 persons-name-desc'>
                            <h5 className=''>{persons[1].name}</h5>
                            <p>{persons[1].desc}</p>
                            <Link to='/' className='seeMore-btn'>See more</Link>
                        </div>
                    </div>
                </div>
                <div className='person'>
                    <img className='img-fluid' src={person3} alt="" />
                    <div className='row d-flex ms-3 mt-3'>
                        <div className='col-2'>
                            <img className='' src={carIcon} alt="" />
                        </div>
                        <div className='col-9 persons-name-desc'>
                            <h5 className=''>{persons[2].name}</h5>
                            <p>{persons[2].desc}</p>
                            <Link to='/' className='seeMore-btn'>See more</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PersonDisplay;