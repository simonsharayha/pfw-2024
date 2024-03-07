import React from 'react';

function Animal({ name, image, onFocus, onDelete }) {
  return (
    <div className="animal">
      <img src={image} alt={name} />
      <div className="animal-buttons">
        <button onClick={onFocus}>Focus</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Animal;
