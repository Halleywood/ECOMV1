import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import '../App.css';

const SubHeader = () => {
    return <div>
        <Navbar bg="light" lg={12} md={6} sm={2} display="flex">
            <Container className="subheader">
                <Link className="link" to="/necklaces">Necklaces</Link>
                <Link className="link" to="/earrings">Earrings</Link>
                <Link className="link" to="/rings">Rings</Link>
                <Link className="link" to="/custom">Custom Jewelry</Link>
            </Container>
        </Navbar>
    </div>;
};

export default SubHeader;
