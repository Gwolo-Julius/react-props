import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Player component that accepts player attributes as props
function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  const cardStyle = {
    width: "18rem",
    marginBottom: "20px",
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
  );
}

// Set default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150",
};

export default Player;
