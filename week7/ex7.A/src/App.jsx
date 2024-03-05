import "./App.css";
import { MovieRow } from "./MovieRow";
function App() {
  const nolanMovies = [
    {
      title: "Following",
      year: 1998,
      actors: ["Jeremy Theobald", "Alex Haw", "Lucy Russell"],
      plotSummary: "A young writer who follows strangers for material meets a thief who takes him under his wing.",
      rating: 7.5,
      image: "/following.jpg"
    },
    {
      title: "Memento",
      year: 2000,
      actors: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
      plotSummary: "A man with short-term memory loss attempts to track down his wife's murderer.",
      rating: 8.4,
      image: "/momento.jpg"
    },
    {
      title: "Insomnia",
      year: 2002,
      actors: ["Al Pacino", "Robin Williams", "Hilary Swank"],
      plotSummary: "Two Los Angeles homicide detectives are dispatched to a northern town where the sun doesn't set to investigate the methodical murder of a local teen.",
      rating: 7.2,
      image: "/insomnia.jpg"
    },
    {
      title: "The Dark Knight",
      year: 2008,
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
      plotSummary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 9.0,
      image: "/TheDarkNight.jpg"
    },
    {
      title: "The Prestige",
      year: 2006,
      actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
      plotSummary: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      rating: 8.5,
      image: "/Prestige.jpg"
    },
    {
      title: "Inception",
      year: 2010,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      plotSummary: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      rating: 8.8,
      image: "/inception.jpg"
    },
    {
      title: "Interstellar",
      year: 2014,
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      plotSummary: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      rating: 8.7,
      image: "/interstellar.jpg"
    },
  ];
    return (
      <div className="nolan-movie">
        <h1>Christopher Nolan's Top Rated Movies</h1>
      <table className="nolan-table">
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Year Released</th>
            <th>Actors</th>
            <th>Plot Summary</th>
            <th>Rating</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {nolanMovies.map((movie, index) => {
            return (
              <MovieRow
                key={movie.image}
                title={movie.title}
                year={movie.year}
                actors={movie.actors}
                plotSummary={movie.plotSummary}
                rating={movie.rating}
                image={movie.image}
              />
              );
            })}
        </tbody>
      </table>
      </div>
    );
  }
  
  export default App;