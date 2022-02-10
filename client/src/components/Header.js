import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" display="flex">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>R.R. Jewelry Co.</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <LinkContainer to="/login">
                                <Nav.Link>< i className="fas fa-user px-3"></i>Sign In</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link>< i className="fas fa-shopping-cart px-3"></i>Cart</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >)
};

export default Header;
