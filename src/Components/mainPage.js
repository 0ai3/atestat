// import '../app.css';
// Import necessary modules
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import MovieCarousel from "./MovieCarousel";
import SeriesCarousel from "./SeriesCarousel";

const MainPage = () => {
	const [username, setUsername] = useState("Guest");

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

	return (
		<div className="bg-gray-700">
            <MovieCarousel/>
            <SeriesCarousel/>

		</div>
	);
};

export default MainPage;
