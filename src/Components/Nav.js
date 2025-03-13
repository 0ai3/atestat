import { Link, Outlet } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import LogOut from "./LogOut";


const userProfilePic = "";

function Nav() {
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
	console.log(username);


	
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-1">
				<aside className="w-24 h-screen bg-gray-900 text-white flex flex-col p-6 fixed">
					<ul className="space-y-6">
						<li>{/* Logo */}</li>
						<li >
							<Link
								to="/"
								className="group flex flex-col justify-center items-center text-sm hover:text-blue-400 duration-200"
							>
								<svg
									fill="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 group-hover:fill-blue-400 "
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<path d="M12.56,2.171a1,1,0,0,0-1.12,0l-8,5.4A1,1,0,0,0,3,8.4V21a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V8.4a1,1,0,0,0-.44-.829ZM14,20H10V14h4Zm5,0H16V13a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v7H5V8.932l7-4.725,7,4.725Z"></path>
									</g>
								</svg>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/trending"
								className="hover:text-blue-400 text-sm group flex flex-col justify-center items-center duration-200"
							>
								<svg
									fill="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 group-hover:fill-blue-400 "
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<path d="M15.874,6.2C13.805,4.75,12.65,3.848,12.98,2.2A1,1,0,0,0,11.758,1.03C11.67,1.052,3,3.319,3,12c0,6.683,3.532,11,9,11h.005c.014,0,.081,0,.178-.007C15.336,22.924,21,20.987,21,14,21,9.8,18.158,7.806,15.874,6.2ZM15.84,19.78A8.1,8.1,0,0,1,12.005,21H12a5.919,5.919,0,0,1-3.142-.846,2.766,2.766,0,0,1-1.224-1.961A3.341,3.341,0,0,1,8.749,15.2c1.375-1.585,2.368-2.73,2.381-4.817C13.219,11.147,17,13.136,17,17.5A2.752,2.752,0,0,1,15.84,19.78Zm2.977-4.029c-.974-4.82-5.879-7.151-8.61-7.73A1,1,0,0,0,9.016,9.174c.391,2.214-.2,2.9-1.778,4.716a5.612,5.612,0,0,0-1.505,2.594A12.772,12.772,0,0,1,5,12a9.179,9.179,0,0,1,5.975-8.581C11.3,5.437,13.1,6.7,14.726,7.84,16.924,9.383,19,10.841,19,14A8.741,8.741,0,0,1,18.817,15.751Z"></path>
									</g>
								</svg>
								Trending
							</Link>
						</li>
						<li>
							<Link
								to="/favorites"
								className="hover:text-blue-400 text-sm group flex flex-col justify-center items-center duration-200"
							>
								<svg
									fill="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 group-hover:fill-blue-400 "
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<path d="M2,21h8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20,15l3,.438L20.5,17.5l.781,3.5L18.5,19l-2.781,2,.781-3.5L14,15.438,17,15l1.5-3Z"></path>
									</g>
								</svg>
								Favorites
							</Link>
						</li>
						<li>
							<Link to="/profile" className="hover:text-blue-400 text-sm group flex flex-col justify-center items-center duration-200">
								<svg
									fill="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 group-hover:fill-blue-400 "

								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"></path>
									</g>
								</svg>
								Profile
							</Link>
						</li>
						<li>{/* Toggle Night Mode (Future Feature) */}</li>
					</ul>
				</aside>

				<div className="flex-1 flex flex-col ml-24">
					<nav className="flex justify-between items-center bg-gray-800 text-white w-full py-4 px-6">
						<ul className="flex w-full justify-between items-center">
							<li>
								<input
									type="text"
									className="w-72 p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
									name="search"
									placeholder="Search content..."
								/>
							</li>
							<li className="flex space-x-4 items-center">
								{username === "Guest" ? (
									<>
										<Link to="/login">
											<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
												Login
											</button>
										</Link>
										<Link to="/register">
											<button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
												Register
											</button>
										</Link>
									</>
								) : (
									<div className="flex flex-col gap-2 justify-center">
										<Link to="/profile">
											<img
												src={userProfilePic}
												alt="Profile"
												className="w-10 h-10 rounded-full border-2 border-blue-400 hover:border-blue-500 transition"
											/>
										</Link>
										<LogOut />
									</div>
								)}
							</li>
						</ul>
					</nav>

					<main className="flex-1">
						<Outlet />
					</main>

					<footer className="bg-gray-800 text-white py-4 px-6 text-center">
						<p>
							© {new Date().getFullYear()} Your Company. All rights reserved.
						</p>
						<ul className="flex justify-center space-x-4 mt-2">
							<li>
								<a
									href="https://www.example.com"
									className="hover:text-blue-400 transition"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="https://www.example.com"
									className="hover:text-blue-400 transition"
								>
									Privacy
								</a>
							</li>
							<li>
								<a
									href="https://www.example.com"
									className="hover:text-blue-400 transition"
								>
									Terms
								</a>
							</li>
						</ul>
					</footer>
				</div>
			</div>
		</div>
	);
}

export default Nav;
