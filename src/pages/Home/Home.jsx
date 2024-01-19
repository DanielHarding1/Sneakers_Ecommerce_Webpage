import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="mt-5 ml-2">
      
      <Row >
        {/* First Row */}
        <Col xs={12} md={4}>
          <Card className="project-card">
            <Card.Img variant="top" src="/path/to/image1.jpg" alt="img" />
            <Card.Body>
              <Card.Title></Card.Title>
              <NavLink to="/project1"></NavLink>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="project-card">
            <Card.Img variant="top" src="/path/to/image2.jpg" alt="img" />
            <Card.Body>
              <Card.Title></Card.Title>
              <NavLink to="/project2"></NavLink>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="project-card">
            <Card.Img variant="top" src="/path/to/image3.jpg" alt="img" />
            <Card.Body>
              <Card.Title></Card.Title>
              <NavLink to="/project3"></NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        {/* Second Row */}
        <Col xs={12} md={4}>
          <Card className="project-card">
            <Card.Img variant="top" src="/path/to/image4.jpg" alt="img" />
            <Card.Body>
              <Card.Title></Card.Title>
              <NavLink to="/project4"></NavLink>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="project-card">
            <Card.Img variant="top" src="/path/to/image5.jpg" alt="img" />
            <Card.Body>
              <Card.Title></Card.Title>
              <NavLink to="/project5"></NavLink>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="project-card">
            <Card.Img variant="top" src="/path/to/image6.jpg" alt="img" />
            <Card.Body>
              <Card.Title></Card.Title>
              <NavLink to="/project6"></NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
