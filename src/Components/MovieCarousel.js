import Card from "./Card";
import React, { useState, useEffect } from "react";

function MovieCarousel() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch("/arr.json")
			.then((response) => response.json())
			.then((data) => setMovies(data));
	}, []);
    
	return (
		<div className="relative">
    <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] whitespace-nowrap flex space-x-4 p-4">
        {movies
            .filter((movie) => movie.type === "Movie")
            .map((movie) => (
                <Card
                    key={movie.id}
                    title={movie.title}
                    year={movie.year}
                    genre={movie.genre}
                    director={movie.director}
                    rating={movie.rating}
                    image={movie.image}
                />
            ))}
    </div>
</div>

	);
}
export default MovieCarousel;
