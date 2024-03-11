import PropTypes from "prop-types";
import "./ItemCard.css";
import trash from "../assets/icons/trash-can.png";
import copy from "../assets/icons/duplicate.png"
export default function ItemCard({
    title,
    year,
    actors,
    plotSummary,
    rating,
    image,
    id,
    deleteFn,
    duplicateFn
}) {
    return (
        <div className="movieCard">
            <div className="cardImg">
                <img src={image} alt={title} />
            </div>
            <div className="cardContent">
                <div className="cardTitle">{title}</div>
                <div className="cardYear">Year: {year}</div>
                <div className="cardActors">
                    <strong>Actors:</strong> {actors.join(", ")}
                </div>
                <div className="cardRating">Rating: {rating}</div>
                <div className="actions">
                    <a href="#" onClick={(evt) => {
                        evt.preventDefault();
                        deleteFn(id)
                    }}><img src={trash}/></a>
                        <a href="#" onClick={(evt) => {
                        evt.preventDefault();
                        duplicateFn(id)
                    }}><img src={copy}/></a></div>
            </div>
        </div>
    )
}
ItemCard.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number, 
    actors: PropTypes.arrayOf(PropTypes.string), 
    plotSummary: PropTypes.string,
    rating: PropTypes.number,
    image: PropTypes.string,
    id: PropTypes.string,
    deleteFn: PropTypes.func,
    duplicateFn: PropTypes.func,
    }
  