import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p> {/* Corrected to display the movie's release year */}
            </div>
            <div>
                <img 
                    src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} 
                    alt={movie.Title} 
                />
            </div>
            <div>
                <span>{movie.Type}</span> {/* Display movie type like "movie", "series", etc. */}
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;