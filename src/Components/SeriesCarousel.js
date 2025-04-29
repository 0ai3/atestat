import Card from "./Card";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

function SeriesCarousel() {
    const [Series, setSeries] = useState([]);

    useEffect(() => {
        fetch("/arr.json")
            .then((response) => response.json())
            .then((data) => setSeries(data));
    }, []);

    async function addToFavorites(id) {
        const user = auth.currentUser;
        if (!user) {
            console.log("No user is signed in");
            return;
        }

        if (!id) {
            console.log("Invalid ID provided");
            return;
        }

        const userId = user.uid;
        const docRef = doc(db, "users", userId);

        try {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // Get current favorites or initialize with empty array if it doesn't exist
                const data = docSnap.data();
                const favorites = Array.isArray(data.favorites)
                    ? [...data.favorites]
                    : [];
                // Check if ID is already in favorites
                if (!favorites.includes(id)) {
                    favorites.push(id);
                    // Only update the document if favorites array is valid
                    await updateDoc(docRef, { favorites: favorites });
                    console.log("Added to favorites successfully");
                } else {
                    console.log("Already in favorites");
                }
            } else {
                // Create a new document if it doesn't exist
                await setDoc(docRef, { favorites: [id] });
                console.log("Created new favorites document");
            }
        } catch (error) {
            console.error("Error updating favorites:", error);
        }
    }

    return (
        <div className="relative z-0">
            <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] whitespace-nowrap flex space-x-4 p-4">
                {Series.filter((series) => series.type === "Series").map((series) => (
                    <Card
                        id={series.id}
                        key={series.id}
                        title={series.title}
                        year={series.year}
                        genre={series.genre}
                        director={series.director}
                        rating={series.rating}
                        image={series.image}
                        onButtonClick={() => addToFavorites(series.id)}
                    />
                ))}
            </div>
        </div>
    );
}
export default SeriesCarousel;
