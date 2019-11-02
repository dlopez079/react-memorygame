import React from "react"; //Imported React so we can export card.
import "./Header.css"; //Imported card.css to style the card.

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;