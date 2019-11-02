import React from "react"; //Imported React so we can export card.
import "./Wrapper.css"; //Imported card.css to style the card.

const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;