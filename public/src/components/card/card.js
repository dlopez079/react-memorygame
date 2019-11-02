import React from "react";  //Imported React so we can export card.
import "./Card.css"; //Imported card.css to style the card.

const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;