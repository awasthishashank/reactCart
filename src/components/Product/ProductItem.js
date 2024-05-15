import { Link } from "react-router-dom";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and White Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductItem = () => {
  const { addToCart } = useContext(CartContext);

  // Pass the product as an argument to handleClick
  const handleClick = (product) => {
    console.log("clicked HC");
    addToCart(product);
  };

  return (
    <Container>
      <h1 className="text-center my-4  bg-primary">Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col md={3} key={index}>
            <Link to= "/store/product"  style={{ textDecoration: 'none' }}><Card className="mb-4">
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                {/* Pass the product to handleClick */}
                <Button variant="primary" onClick={() => handleClick(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card></Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductItem;

