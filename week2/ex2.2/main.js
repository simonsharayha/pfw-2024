const myGameArray = [
      {
        title: "The Last of Us Part II",
        type: "Action-Adventure",
        numberOfPlayers: "Single Player",
        rating: 10,
        shortDescription: "A gripping narrative-driven game set in a post-apocalyptic world, where players navigate intense situations and make morally challenging decisions."
      },
      {
        title: "Rocket League",
        type: "Sports, Racing",
        numberOfPlayers: "Multiplayer (1-4 players locally, online multiplayer available)",
        rating: 9,
        shortDescription: "Soccer meets rocket-powered cars in this fast-paced, physics-based multiplayer game that combines skillful gameplay with exhilarating matches."
      },
      {
        title: "Stardew Valley",
        type: "Simulation, RPG",
        numberOfPlayers: "Single Player, Multiplayer (up to 4 players)",
        rating: 9.5,
        shortDescription: "Escape to the countryside in this charming farming simulation game. Grow crops, raise animals, build relationships, and explore a delightful pixelated world."
      }
]

const promptResponse = prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");

alert("You selected " + myGameArray[promptResponse -1 ].title + ", which is a " + myGameArray[promptResponse -1 ].type + " of game. It's designed for " + myGameArray[promptResponse -1 ].numberOfPlayers + ". With a rating of " + myGameArray[promptResponse -1 ].rating + ". To summarize, " + myGameArray[promptResponse -1 ].shortDescription);

if (promptResponse>3) {
    alert("please entera number from 1 to 3");
}