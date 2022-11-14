import React from "react";
import Card from "react-bootstrap/Card";
export default function CardApi(props) {
  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Text>{props.name}</Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={props.imageUrl} className="fluid" />
    </Card>
  );
}
