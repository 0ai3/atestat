import Card from "./Card";

const MovieList = ({ movies, limit }) => {
	const displayMovies = limit ? movies.slice(0, limit) : movies;
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
			{displayMovies.map((movie) => (
				<Card key={movie.id} {...movie} />
			))}
		</div>
	);
};

export default MovieList;
