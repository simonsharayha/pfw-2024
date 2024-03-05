import React from "react";

const Camelid = ({ name, image, trivia }) => (
  <div className="camelid">
    <h2>{name}</h2>
    <img src={image} alt={name} />
    <p>{trivia}</p>
  </div>
);

export default Camelid;