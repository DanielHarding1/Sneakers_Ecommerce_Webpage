import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

import "./Home.css";

const Home = ({sneakersData = []}) => {
  return (
    <div className="mt-5 ml-2">
      <Row className="row-cols-1 row-cols-md-3 g-4">
        {sneakersData?.map((sneaker, index) => (
          <Col key={sneaker.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={`https://${sneaker.imageUrl}`} alt="img" />
              <Card.Body>
                <Card.Title>{sneaker.name}</Card.Title>
                <Card.Text>
                  <strong>Brand:</strong> {sneaker.brandName}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <strong>Price:</strong> {sneaker.price.current.text}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
