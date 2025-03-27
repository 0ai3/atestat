import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function LogOut() {
	const [username, setUsername] = useState("");

	useEffect(() => {
		const fetchUsername = async () => {
			if (auth.currentUser) {
				const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
				if (userDoc.exists()) {
					setUsername(userDoc.data().username);
				}
			}
		};
		fetchUsername();
	}, []);

	return (
		<div>
			<button onClick={() => auth.signOut()} 
        className="hover:text-blue-400 p-2 text-sm group flex flex-col justify-center items-center "
        >
				<svg
					fill="currentColor"
					viewBox="0 0 24 24"
          className="w-5 h-5 group-hover:fill-blue-400 "
					xmlns="http://www.w3.org/2000/svg"
					data-darkreader-inline-fill=""
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						<path d="M7.707,8.707,5.414,11H17a1,1,0,0,1,0,2H5.414l2.293,2.293a1,1,0,1,1-1.414,1.414l-4-4a1,1,0,0,1,0-1.414l4-4A1,1,0,1,1,7.707,8.707ZM21,1H13a1,1,0,0,0,0,2h7V21H13a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z"></path>
					</g>
				</svg>
        Log Out
			</button>
		</div>
	);
}

export default LogOut;
