import PropTypes from 'prop-types';
import "./ItemCard.css";
import { Link } from "react-router-dom";
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
                <div className="cardTitle">
                    <Link to={`${id}`}>{title}</Link>
                    
                    </div>
                <div className="cardYear">Year: {Number(year)}</div>
                <div className="cardActors">
                    <strong>Actors:</strong> {actors}
                </div>
                <div className="cardRating">Rating: {Number(rating)}</div>
                <div className="actions">
                    <a href="#" onClick={(evt) => {
                        evt.preventDefault();
                        deleteFn(id)
                    }}><img src={trash} alt="Delete" /></a>
                    <a href="#" onClick={(evt) => {
                        evt.preventDefault();
                        duplicateFn(id)
                    }}><img src={copy} alt="Duplicate" /></a>
                </div>
            </div>
        </div>
    );
}

ItemCard.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    actors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteFn: PropTypes.func.isRequired,
    duplicateFn: PropTypes.func.isRequired
};
