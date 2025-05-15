import { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");
	const [genre, setGenre] = useState("");

	useEffect(() => {
		fetch("/arr.json")
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.filter((item) => item.type === "Movie"));
			});
	}, []);

	const genres = Array.from(
		new Set(movies.flatMap((m) => m.genre.split(", ").map((g) => g.trim())))
	);

	const filtered = movies.filter(
		(m) =>
			m.title.toLowerCase().includes(search.toLowerCase()) &&
			(!genre || m.genre.includes(genre))
	);

	return (
		<div className="bg-gray-700 min-h-screen p-6">
			<h1 className="text-3xl font-bold text-white mb-8">All Movies</h1>
			<div className="flex flex-col md:flex-row gap-4 mb-6">
				<input
					className="p-2 rounded bg-gray-800 text-white flex-1"
					placeholder="Search movies..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<select
					className="p-2 rounded bg-gray-800 text-white"
					value={genre}
					onChange={(e) => setGenre(e.target.value)}
				>
					<option value="">All Genres</option>
					{genres.map((g) => (
						<option key={g} value={g}>
							{g}
						</option>
					))}
				</select>
			</div>
			<MovieList movies={filtered} />
		</div>
	);
};

export default Movies;
