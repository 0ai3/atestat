import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Card from "./Card";

const Favourites = () => {
	const [favourites, setFavourites] = useState([]);
	const [loading, setLoading] = useState(true);
    const [arr, setArr] = useState([]);
	useEffect(() => {
		fetch("/arr.json")
			.then((response) => response.json())
			.then((data) => setArr(data));
	}, []);
	useEffect(() => {
		const fetchFavourites = async () => {
			try {
				const auth = getAuth();
				const user = auth.currentUser;

				if (!user) {
					setLoading(false);
					return;
				}

				const db = getFirestore();
				const userDocRef = doc(db, "users", user.uid);
				const userDocSnap = await getDoc(userDocRef);

				if (userDocSnap.exists()) {
					const userData = userDocSnap.data();
					const userFavourites = userData.favorites || [];
					setFavourites(userFavourites);
				}

				setLoading(false);
			} catch (error) {
				console.error("Error fetching favorites:", error);
				setLoading(false);
			}
		};
		fetchFavourites();
	}, []);

	if (loading) {
		return <div className="loading">Loading favourites...</div>;
	}

	if (favourites.length === 0) {
		return <div className="no-favourites">No favourites added yet</div>;
	}

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Favourites</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {favourites.map((favId) =>
                    arr.filter(item => item.id === favId).map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            year={item.year}
                            rating={item.rating}
                            genre={item.genre}
                            director={item.director}
                            onButtonClick={() => {}}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Favourites;
