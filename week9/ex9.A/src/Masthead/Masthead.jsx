import mastheadImg from "../assets/masthead.png";
import "./Masthead.css";
export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt ="Christopher Nolan Movies" />
            <h1>Christopher Nolan Movies</h1>
        </div>
    )
}