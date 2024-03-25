import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './NewMovieForm.css';

export function NewMovieForm({ addCardFn }) {
    const initialCardSetting = {
        title: '',
        year: '',
        rating: '',
        image: '',
        actors: ''
    };

    const [newCard, setNewCard] = useState(initialCardSetting);
    const [errorObj, setErrorObj] = useState({
        title: '',
        image: '',
        rating: '',
        year: '',
        actors: ''
    });

    function validateForm() {
        let valid = true;
        const errors = {};

        if (!newCard.title) {
            errors.title = 'The Title field is required';
            valid = false;
        }
        if (!newCard.image) {
            errors.image = 'The Image field is required';
            valid = false;
        }
        if (!newCard.year) {
            errors.year = 'The Year field is required';
            valid = false;
        }

        setErrorObj(errors);
        return valid;
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setNewCard({
            ...newCard,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const actorsArray = newCard.actors.split(",").map((actor) => actor.trim());
        setNewCard((prevCard) => ({
            ...prevCard,
            actors: actorsArray.length > 0 ? actorsArray : [],
        }));
        if (validateForm(newCard)) {
            addCardFn(newCard);
            setNewCard(initialCardSetting);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="new-movie-form-wrapper">
            <fieldset>
                <legend>Add a Movie</legend>
                <div className={clsx('form-group', { 'error': errorObj.title })}>
                    <label className="required" htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={newCard.title}
                        onChange={handleChange}
                        onBlur={() => {
                            if (newCard.title) {
                                setErrorObj(prevErrors => ({
                                    ...prevErrors,
                                    title: ''
                                }));
                            }
                        }}
                        required
                    />
                    {errorObj.title && <small className="errorFeedback">{errorObj.title}</small>}
                </div>
                <div className={clsx('form-group', { 'error': errorObj.year })}>
                    <label className="required" htmlFor="year">Year</label>
                    <input
                        type="number"
                        name="year"
                        id="year"
                        value={newCard.year}
                        onChange={handleChange}
                        onBlur={() => {
                            if (newCard.year) {
                                setErrorObj(prevErrors => ({
                                    ...prevErrors,
                                    year: ''
                                }));
                            }
                        }}
                        required
                    />
                    {errorObj.year && <small className="errorFeedback">{errorObj.year}</small>}
                </div>
                <div className={clsx('form-group', { 'error': errorObj.rating })}>
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="text"
                        name="rating"
                        id="rating"
                        value={newCard.rating}
                        onChange={handleChange}
                    />
                    {errorObj.rating && <small className="errorFeedback">{errorObj.rating}</small>}
                </div>
                <div className={clsx('form-group', { 'error': errorObj.image })}>
                    <label className="required" htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        value={newCard.image}
                        onChange={handleChange}
                        onBlur={() => {
                            if (newCard.image) {
                                setErrorObj(prevErrors => ({
                                    ...prevErrors,
                                    image: ''
                                }));
                            }
                        }}
                        required
                    />
                    {errorObj.image && <small className="errorFeedback">{errorObj.image}</small>}
                </div>
                <div className={clsx('form-group', { 'error': errorObj.actors })}>
                    <label htmlFor="actors">Actors</label>
                    <input
                        type="text"
                        name="actors"
                        id="actors"
                        value={newCard.actors}
                        onChange={handleChange}
                    />
                    {errorObj.actors && <small className="errorFeedback">{errorObj.actors}</small>}
                </div>
            </fieldset>
            <button type="submit" disabled={Object.values(errorObj).some(Boolean)}>Add Movie</button>
        </form>
    );
}

NewMovieForm.propTypes = {
    addCardFn: PropTypes.func.isRequired
};
