import React from 'react';
import{useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, ListGroup, Col, Row, Image } from 'react-bootstrap';
import axios from 'axios';

const ProductScreen = ({updateCart}, {cartItems}) => {

  const { id } = useParams();

  const navigate = useNavigate();
   
  const [name, setName]=useState("")
  const [image, setImage] =useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [numReviews, setReviews] =useState(0)
  const [rating, setRating]=useState(0)
  const[category, setCategory]=useState("")
  const[item, setItem]=useState([])

  
  
  useEffect( ()=>{
    axios.get("http://localhost:8000/api/products/" + id)
    .then(res=>{
      console.log("COMING FROM get one")
      console.log(res.data)
      setName(res.data.oneProduct.name)
      setImage(res.data.oneProduct.image)
      setPrice(res.data.oneProduct.price)
      setDescription(res.data.oneProduct.description)
      setReviews(res.data.oneProduct.numReviews)
      setRating(res.data.oneProduct.rating)
      setCategory(res.data.oneProduct.category)
    })
    .catch(err=>console.log(err))
  }, [])

  useEffect( ()=>{
    axios.get("http://localhost:8000/api/products2/" + id)
    .then(res=>{
      console.log("COMING FROM get one")
      console.log(res.data)
      setName(res.data.oneProduct.name)
      setImage(res.data.oneProduct.image)
      setPrice(res.data.oneProduct.price)
      setDescription(res.data.oneProduct.description)
      setReviews(res.data.oneProduct.numReviews)
      setRating(res.data.oneProduct.rating)
      setCategory(res.data.oneProduct.category)
    })
    .catch(err=>console.log(err))
  }, [])

  const addToCart=(productID)=>{ 
    console.log("clicked")
    const id=productID
    const newItem={
      name,
      image, 
      price,
      description,
      rating,
      category, 
      id
    }
    console.log(newItem)
    updateCart(newItem)
    navigate("/cart")
  }

  return (
  <div> 
    <Row className='mt-5'>
      <Col md={6}>
        <Image src={image} alt={name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3><strong>{name}</strong></h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3>$ {price}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3>Rating: {rating}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3>Details:<br /> {description}</h3>
          </ListGroup.Item>
          <ListGroup.Item variant='flush'>
          <label className="inputlabel">Quantity:</label>
          <input className="inputbox" type="number"></input>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button className='btn-secondary' type='button' onClick={ ()=> addToCart(id)}>
              Add To Cart
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  </div>)
};

export default ProductScreen;
