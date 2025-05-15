import { useAuth } from "../contexts/AuthContext";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

function AddToFavourites({ id }) {
	const { currentUser } = useAuth();
	const [isFavourite, setIsFavourite] = useState(false);

	useEffect(() => {
		async function checkFavourite() {
			if (!currentUser || !id) {
				setIsFavourite(false);
				return;
			}
			const userId = currentUser.uid;
			const docRef = doc(db, "users", userId);
			try {
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					const data = docSnap.data();
					const favorites = Array.isArray(data.favorites) ? data.favorites : [];
					setIsFavourite(favorites.includes(id));
				} else {
					setIsFavourite(false);
				}
			} catch (error) {
				setIsFavourite(false);
			}
		}
		checkFavourite();
	}, [id, currentUser]);

	async function handleFavouriteClick() {
		if (!currentUser) {
			console.log("No user is signed in");
			return;
		}
		if (!id) {
			console.log("Invalid ID provided");
			return;
		}
		const userId = currentUser.uid;
		const docRef = doc(db, "users", userId);
		try {
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const data = docSnap.data();
				let favorites = Array.isArray(data.favorites)
					? [...data.favorites]
					: [];
				if (isFavourite) {
					// Remove from favourites
					favorites = favorites.filter((favId) => favId !== id);
					await updateDoc(docRef, { favorites });
					setIsFavourite(false);
					console.log("Removed from favorites successfully");
				} else {
					// Add to favourites
					if (!favorites.includes(id)) {
						favorites.push(id);
						await updateDoc(docRef, { favorites });
						setIsFavourite(true);
						console.log("Added to favorites successfully");
					} else {
						console.log("Already in favorites");
					}
				}
			} else {
				// Create new document with this favourite
				await setDoc(docRef, { favorites: [id] });
				setIsFavourite(true);
				console.log("Created new favorites document");
			}
		} catch (error) {
			console.error("Error updating favorites:", error);
		}
	}
	return (
		<button
			className="absolute top-2 right-2 transition"
			onClick={handleFavouriteClick}
		>
			<svg
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				className="rounded-full p-1 bg-gray-300/50 w-5 h-5 group-hover:bg-gray-400/50 hover:scale-110 transition duration-200"
				stroke="#ffffff"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				></g>
				<g id="SVGRepo_iconCarrier">
					<path
						d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"
						fill={isFavourite ? "#facc15" : "#ffffff"}
					/>
				</g>
			</svg>
		</button>
	);
}

export default AddToFavourites;
