
const myQuestions = [ 
  {
    Question: "In 'Avengers: Endgame', which character is responsible for the iconic line, 'I love you 3000'?",
    Answer: "Tony Stark/Iron Man"
  }, 
  { 
    Question: "What is the name of the metal alloy used to make Captain America's shield, and where is it primarily found in the MCU?", 
    Answer: "Vibranium"
  },
  {
    Question: "Which MCU film features the character T'Challa as the king of Wakanda?",  
    Answer: "Black Panther"
  },
  {
    Question: "Which actor portrays the character Doctor Strange in the Marvel Cinematic Universe?", 
    Answer: "Benedict Cumberbatch"
  },
  {
    Question: "What is the name of the metal alloy used to make Captain America's shield?",
    Answer: "Vibranium"
  }
];

const randomQuestionIndex = Math.floor(Math.random() * myQuestions.length);

const promptResponse = window.prompt(myQuestions[randomQuestionIndex].Question);

window.alert("You answered: " + promptResponse + "\nThe correct answer was: " + myQuestions[randomQuestionIndex].Answer);


