import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./intro.css";
export default function Intro() {
  return (
    <div className="introMain">
      <Card className="text-center shadow w-50">
        <Card.Header>React Dashboard</Card.Header>
        <Card.Body>
          <Card.Title>Welcome</Card.Title>
          <Card.Text>Click on the button to enter</Card.Text>
          <Link to="/home">
            <Button variant="secondary">Enter Here</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          Please make sure to read
        </Card.Footer>
      </Card>
    </div>
  );
}
