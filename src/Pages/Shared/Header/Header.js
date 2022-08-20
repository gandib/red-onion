import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../images/images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" sticky='top' bg="white" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={logo} height='30' alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle className='bg-black' aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {/* <Nav className="me-auto">
                                <Nav.Link href="home#services">Services</Nav.Link>
                                <Nav.Link href="home#experts">Experts</Nav.Link>
                            </Nav> */}
                            <Nav className="ms-auto">
                                <Nav.Link className='text-black' as={Link} to="/cart">
                                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                                </Nav.Link>
                                <Nav.Link className='text-black' as={Link} to="/login">Login</Nav.Link>
                                {
                                    // user ?
                                    // <button className='btn btn-link text-decoration-none text-white' onClick={handleSignout}>Sign Out</button>
                                    // :
                                    <Nav.Link className=' header-signup-btn' as={Link} to="/signup">
                                        Sign up
                                    </Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;