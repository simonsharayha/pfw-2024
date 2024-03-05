import React from "react";
import Camelid from "./components/Camelid";

const llama = {
  name: 'Llama',
  image: 'llama.jpg',
  trivia: 'Llamas are domesticated South American camelids.'
};

const alpaca = {
  name: 'Alpaca',
  image: 'alpaca.jpg',
  trivia: 'Alpacas are domesticated camelids from South America.'
};

const App = () => (
  <div className="camelid-container">
    <h1>Llama vs. Alpaca</h1>
    <Camelid name={llama.name} image={llama.image} trivia={llama.trivia} />
    <Camelid name={alpaca.name} image={alpaca.image} trivia={alpaca.trivia} />
  </div>
);

export default App;