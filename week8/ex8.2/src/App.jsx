// App.jsx
import React, { useState } from 'react';
import Animal from './Animal';
import './App.css'; // Import the CSS file for styling

function App() {
  const [headline, setHeadline] = useState("Simon's list of animals");
  const [animals, setAnimals] = useState([
    { name: 'Lion', image: 'lion.jpg' },
    { name: 'Elephant', image: 'elephant.jpg' },
    { name: 'Tiger', image: 'tiger.jpg' },
  ]);

  const handleFocusAnimal = (animalName) => {
    setHeadline(`Focus on ${animalName}`);
  };

  const handleDeleteAnimal = (animalName) => {
    setAnimals(animals.filter((animal) => animal.name !== animalName));
  };

  return (
    <div className="app">
      <h1>{headline}</h1>
      <div className="animal-list">
        {animals.map((animal, index) => (
          <Animal
            key={index}
            name={animal.name}
            image={animal.image}
            onFocus={() => handleFocusAnimal(animal.name)}
            onDelete={() => handleDeleteAnimal(animal.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
