// import React from "react";
// import { useParams } from "react-router-dom";



// const ProductDetail = () => {
//     const params = useParams();
//     console.log(params.productId);
//   return (
//     <>
//       <div>ProductDetail</div>
//       <h1>Shashank Awasthi</h1>
//       <p>{params.productId}</p>
//     </>
//   );
// };

// export default ProductDetail;
import { useParams } from "react-router-dom";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail  = () => {
  const params = useParams();
  console.log(params.productId)

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="big-image">
            {/* Big image */}
            <img src="big_image.jpg" alt="Big Image" />
          </div>
          <div className="small-images">
            {/* Small images */}
            <img src="small_image1.jpg" alt="Small Image 1" />
            <img src="small_image2.jpg" alt="Small Image 2" />
            <img src="small_image3.jpg" alt="Small Image 3" />
            <img src="small_image4.jpg" alt="Small Image 4" />
            <img src="small_image5.jpg" alt="Small Image 5" />
          </div>
        </Col>
        <Col md={6}>
          <div className="product-details">
            {/* Product name */}
            <h2>Product Name</h2>
            {/* Price */}
            <p>Price: $XX.XX</p>
            {/* Review */}
            <div className="reviews">
              <h3>Reviews</h3>
              <ul>
                <li>Review 1</li>
                <li>Review 2</li>
                <li>Review 3</li>
                {/* Add more reviews as needed */}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

