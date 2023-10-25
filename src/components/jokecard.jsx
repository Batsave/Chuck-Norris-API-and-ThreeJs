import PropTypes from "prop-types";
import './jokecard.scss';

export default function JokeCard({ value, getNewJoke }) {
    JokeCard.propTypes = {
        value: PropTypes.string.isRequired,
        getNewJoke: PropTypes.func.isRequired,

    };

    return (
        <div className="main-container">
        <div className="card">
            <div className="info-container">
                <div className="info-head">
                    <h4>
                        {value}
                    </h4>
                </div>
                <button className="button" onClick={getNewJoke}>Get a new Joke</button>
            </div>
        </div>
        </div>
    );
}
 

