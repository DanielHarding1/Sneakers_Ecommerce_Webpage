import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import shoePlaceholder from "../../assets/shoePlaceholder.jpeg"


function CardPlaceholder() {
  const COUNT = 3;
  return (
    Array(COUNT).fill(null).map(() =>
     <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={shoePlaceholder} />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
    )
  );
}

export default CardPlaceholder;
