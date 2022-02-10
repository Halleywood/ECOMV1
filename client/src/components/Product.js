import React from 'react';
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap';

const Product = ({product}) => {
  return (<div>
      <Card className='my-3 p-3 rounded'>
          <Link to={`/product/${product._id}`}>
              <Card.Img src={product.image} variant="top" height="400" />
          </Link>
     
      <Card.Body>
          <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
          <Card.Text as='div'>${product.price}</Card.Text>
      </Card.Body>
      </Card>
  </div>)
};

export default Product;
