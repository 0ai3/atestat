// import '../app.css';
// Import necessary modules
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import SeriesList from "./SeriesList";

const MainPage = () => {
	const [username, setUsername] = useState("Guest");
	const [movies, setMovies] = useState([]);
	const [series, setSeries] = useState([]);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUsername(user.displayName || "User");
			} else {
				setUsername("Guest");
			}
		});
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		fetch("/arr.json")
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.filter((item) => item.type === "Movie"));
				setSeries(data.filter((item) => item.type === "Series"));
			});
	}, []);

	return (
		<div className="bg-gray-700 min-h-screen p-6">
			<h1 className="text-3xl font-bold text-white mb-8 relative">
				Welcome, {username}!
			</h1>
			<div className="mb-12">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl text-purple-300 font-semibold">Movies</h2>
					<Link to="/movies" className="text-purple-400 hover:underline">
						See All
					</Link>
				</div>
				<MovieList movies={movies} limit={5} />
			</div>
			<div className="mb-20">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl text-purple-300 font-semibold">Series</h2>
					<Link to="/series" className="text-purple-400 hover:underline">
						See All
					</Link>
				</div>
				<SeriesList series={series} limit={5} />
			</div>
		</div>
	);
};

export default MainPage;
