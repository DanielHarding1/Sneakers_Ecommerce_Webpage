import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

import sneakersData from "./Data";
import "./Home.css";

const Home = () => {
  const [sneakersData, setSneakersData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://zylalabs.com/api/916/sneakers+database+api/731/search+sneaker?limit=20&page=Optional&query=jordan',
          {
            headers: {
              'Authorization': 'Bearer 3304|HHzvClM8QNxlNBmorULxTQ9LQu6kMlaBsWlNe9b1'
            }
          }
        );
        setSneakersData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
return (
    <div className="mt-5 ml-2">
      <Row>
        {sneakersData.results.map((sneaker, index) => (
          <Col key={index} xs={12} md={4}>
            <Card className="project-card">
              <Card.Img variant="top" src={sneaker.image.thumbnail} alt="img" />
              <Card.Body>
                <Card.Title>{sneaker.name}</Card.Title>
                <Card.Text>
                  <strong>Brand:</strong> {sneaker.brand}<br />
                  <strong>Colorway:</strong> {sneaker.colorway}<br />
                  <strong>Gender:</strong> {sneaker.gender}<br />
                  <strong>Colorway:</strong> {sneaker.colorway}<br />
                  <strong>Silhouette:</strong> {sneaker.silhouette}<br />
                  <strong>Release Year:</strong> {sneaker.releaseYear}<br />
                  <strong>ReleaseDate:</strong> {sneaker.releaseDate}<br />
                  <strong>Retail Price:</strong> ${sneaker.retailPrice}<br />
                  <strong>EstimatedMarketValue:</strong> {sneaker.estimatedMarketValue}<br />
                  <strong>Story:</strong> {sneaker.story}<br />
                </Card.Text>
                <NavLink to={`/project${index + 1}`}>Details</NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
