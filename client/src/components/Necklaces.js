import React from 'react';
import { Row, Col, Container, Carousel } from 'react-bootstrap';
import Product from '../components/Product'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Necklaces = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        console.log("COMING FROM THE BACKEND")
        console.log(res.data)
        setProducts(res.data.allProducts)
      })

      .catch(err => console.log(err))
  }, [])

  return (<div>
   <Container className="text-center mt-5">
      <h1>Necklaces</h1>
    </Container>
    <Row>
      {products.map((product, index) => (
        <Col key={index} sm={12} md={8} lg={6} xl={4} >
          <Product product={product} />
        </Col>
      ))}
    </Row>
  </div>)
};

export default Necklaces;
