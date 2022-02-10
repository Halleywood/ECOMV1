import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import axios from 'axios';
import '../App.css';
import PayPal from './PayPal';


const CartScreen = ({ cartItems, updateCart }) => {

    const [checkOut, setCheckOut] = useState(false)

    // const [skdReady, setSdkReady]= useState(false)
    const navigate = useNavigate();

    const removeFromCart = (id) => {
        console.log(id)
    }

    // const checkoutHandler=()=>{
    //     console.log("CHECKOUT")
    //     navigate("/pay")
    // }

    // useEffect( ()=>{
    //     const addPayPalScript = async () =>{
    //         const { data: clientId} = await axios.get('http://localhost:8000/api/config/paypal')
    //         const script = document.createElement('script')
    //         script.type = 'text/javascript'
    //         script.src = `https://paypal.com/sdk/js?client-id=${clientId}`
    //         script.async = true
    //         script.onload =()=>{
    //             setSdkReady(true)
    //         }
    //         document.body.appendChild(script)
    //         console.log("----clientId-----")
    //         console.log(clientId)
    //     }

    //     addPayPalScript();
    // })

    return (
        <div className="cartcontainer">
            {checkOut ? <PayPal /> : <>
                <Row>
                    <Col md={8} className="align-items-center">
                        <h1>Shopping Cart</h1>
                        {cartItems.length === 0 ? <h3>Your cart is empty <Link to="/">Go Back to Browsing</Link></h3> :
                            <ListGroup variant='flush'>
                                {cartItems.map((item, index) => (
                                    <ListGroup.Item className="listgroupitem" variant='flush' key={index}>
                                        <Row>
                                            <Col md={4}>
                                                <Image fluid rounded src={item.image} alt="{item.name}"></Image>
                                            </Col>
                                            <Col md={5}>
                                                <Link className="text-decoration-none link" to={`/product/${item.id}`}>{item.name}</Link>
                                            </Col>
                                            <Col className="details" md={2}>
                                                ${item.price}
                                            </Col>
                                            <Col md={2} variant='flush'>
                                            <label>Quantity:</label>
                                                <input className="inputbox" type="number"></input>
                                                <Button type='button' className="btn-secondary">Remove</Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="py-3">
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={5}>
                                            <h2>Subtotal:</h2>
                                            {/* <h1>{cartItems.reduce( (acc, item) => acc + item.</h1> */}
                                        </Col>
                                        <Col md={3}>
                                            <h2>
                                                {cartItems.length}
                                            </h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={5}>
                                            <h2>Total:</h2>
                                        </Col>
                                        <Col md={3}>
                                            <h2>
                                                {cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                                            </h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Button type='button' className="btn-block btn-outline-dark" variant="light" onClick={() => setCheckOut(true)} disabled={cartItems.length === 0}>Checkout</Button>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </>}
        </div>
    )
};

export default CartScreen;
