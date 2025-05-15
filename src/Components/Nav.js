import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import LogOut from "./LogOut";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Nav() {
	const { currentUser } = useAuth();
	const [username, setUsername] = useState("Guest");
	const [userImage, setUserImage] = useState("");
	const [searchOpen, setSearchOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [allContent, setAllContent] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (currentUser) {
			setUsername(currentUser.displayName || "User");
			setUserImage(currentUser.photoURL);
		} else {
			setUsername("Guest");
			setUserImage("");
		}
	}, [currentUser]);

	useEffect(() => {
		fetch("/arr.json")
			.then((res) => res.json())
			.then((data) => setAllContent(data));
	}, []);

	useEffect(() => {
		if (search.trim() === "") {
			setResults([]);
			return;
		}
		const filtered = allContent.filter((item) =>
			item.title.toLowerCase().includes(search.toLowerCase())
		);
		setResults(filtered);
	}, [search, allContent]);

	return (
		<div className="flex flex-col min-h-screen w-full ">
			<div className="flex flex-1 ">
				<aside className="w-20 h-screen bg-gray-900 text-white flex flex-col fixed z-50">
					<Link to="/about">
						<img src="/images/logo.png" alt="Logo" className="h-20" />
					</Link>

					<Link
						to="/"
						className="group p-5 flex flex-col justify-center items-center text-sm hover:text-blue-400 hover:bg-blue-900/20 duration-200"
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

					<Link
						to="/trending"
						className="hover:text-blue-400 p-5 bg-gray-800 text-sm group flex flex-col justify-center items-center duration-200 hover:bg-blue-900/20"
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
					<Link
						to="/movies"
						className="hover:text-blue-400 p-5 text-sm group flex flex-col justify-center items-center duration-200 hover:bg-blue-900/20"
					>
						<svg
							fill="currentColor"
							viewBox="0 -13.54 122.88 122.88"
							version="1.1"
							id="Layer_1"
							className="w-5 h-5 group-hover:fill-blue-400 "
							stroke="currentColor"
						>
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								{" "}
								<g>
									{" "}
									<path d="M12.14,0H32.8h29.43h28.8h19.71c3.34,0,6.38,1.37,8.58,3.56c2.2,2.2,3.56,5.24,3.56,8.58v7.13v57.25v7.09 c0,3.34-1.37,6.38-3.56,8.58c-2.2,2.2-5.24,3.56-8.58,3.56h-19.2c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04 H62.74c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04H33.31c-0.16,0.03-0.33,0.04-0.51,0.04 c-0.17,0-0.34-0.01-0.51-0.04H12.14c-3.34,0-6.38-1.37-8.58-3.56S0,86.95,0,83.61v-7.09V19.27v-7.13C0,8.8,1.37,5.76,3.56,3.56 C5.76,1.37,8.8,0,12.14,0L12.14,0z M55.19,31.24l20.53,14.32c0.32,0.2,0.61,0.48,0.84,0.81c0.92,1.33,0.58,3.14-0.74,4.06 L55.37,64.57c-0.5,0.41-1.15,0.66-1.85,0.66c-1.62,0-2.93-1.31-2.93-2.93V33.63h0.01c0-0.58,0.17-1.16,0.52-1.67 C52.05,30.64,53.87,30.32,55.19,31.24L55.19,31.24z M93.95,79.45V89.9h16.78c1.73,0,3.3-0.71,4.44-1.85 c1.14-1.14,1.85-2.71,1.85-4.44v-4.16H93.95L93.95,79.45z M88.1,89.9V79.45H65.16V89.9H88.1L88.1,89.9z M59.31,89.9V79.45H35.73 V89.9H59.31L59.31,89.9z M29.87,89.9V79.45H5.85v4.16c0,1.73,0.71,3.3,1.85,4.44c1.14,1.14,2.71,1.85,4.44,1.85H29.87L29.87,89.9z M5.85,73.6H32.8h29.43h28.8h26V22.2h-26h-28.8H32.8H5.85V73.6L5.85,73.6z M88.1,16.35V5.85H65.16v10.49H88.1L88.1,16.35z M93.95,5.85v10.49h23.07v-4.2c0-1.73-0.71-3.3-1.85-4.44c-1.14-1.14-2.71-1.85-4.44-1.85H93.95L93.95,5.85z M59.31,16.35V5.85 H35.73v10.49H59.31L59.31,16.35z M29.87,16.35V5.85H12.14c-1.73,0-3.3,0.71-4.44,1.85c-1.14,1.14-1.85,2.71-1.85,4.44v4.2H29.87 L29.87,16.35z"></path>{" "}
								</g>{" "}
							</g>
						</svg>
						Movies
					</Link>
					<Link
						to="/series"
						className="hover:text-blue-400 bg-gray-800 p-5 text-sm group flex flex-col justify-center items-center duration-200 hover:bg-blue-900/20"
					>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							stroke="currentColor"
							data-darkreader-inline-stroke=""
							className="w-5 h-5 group-hover:fill-blue-400 "
						>
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								{" "}
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M15.4881 1.43057C15.8026 1.70014 15.839 2.17361 15.5694 2.48811L13.2021 5.25001L16.0549 5.25001C17.4225 5.24999 18.5248 5.24997 19.3918 5.36653C20.2919 5.48755 21.0497 5.74644 21.6516 6.34836C22.2536 6.95028 22.5125 7.70815 22.6335 8.60826C22.75 9.47523 22.75 10.5776 22.75 11.9451V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.7501 17.4225 22.75 16.0549 22.75L7.94513 22.75C6.57754 22.75 5.47522 22.7501 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74643 21.0497 1.48754 20.2919 1.36652 19.3918C1.24996 18.5248 1.24998 17.4225 1.25 16.0549L1.25 11.9451C1.24998 10.5775 1.24996 9.47523 1.36652 8.60826C1.48754 7.70815 1.74643 6.95028 2.34835 6.34836C2.95027 5.74645 3.70814 5.48755 4.60825 5.36654C5.47521 5.24998 6.57753 5.24999 7.94512 5.25001L10.7979 5.25001L8.43056 2.48811C8.16099 2.17361 8.19741 1.70014 8.51191 1.43057C8.8264 1.16101 9.29988 1.19743 9.56944 1.51192L12 4.34757L14.4306 1.51192C14.7001 1.19743 15.1736 1.161 15.4881 1.43057ZM16.75 6.75079L16.75 21.2492C17.7958 21.246 18.5756 21.2297 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16V12C21.25 10.5646 21.2484 9.56348 21.1469 8.80813C21.0482 8.07436 20.8678 7.68578 20.591 7.40902C20.3142 7.13226 19.9257 6.95181 19.1919 6.85316C18.5756 6.77031 17.7958 6.75399 16.75 6.75079ZM15.25 21.25L15.25 6.75001L8 6.75001C6.56458 6.75001 5.56347 6.75161 4.80812 6.85316C4.07435 6.95181 3.68577 7.13226 3.40901 7.40902C3.13225 7.68579 2.9518 8.07436 2.85315 8.80813C2.75159 9.56348 2.75 10.5646 2.75 12L2.75 16C2.75 17.4354 2.75159 18.4365 2.85315 19.1919C2.9518 19.9257 3.13225 20.3142 3.40901 20.591C3.68577 20.8678 4.07435 21.0482 4.80812 21.1469C5.56347 21.2484 6.56459 21.25 8 21.25L15.25 21.25Z"
									fill="currentColor"
								></path>{" "}
								<path
									d="M20 16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16C18 16.5523 18.4477 17 19 17C19.5523 17 20 16.5523 20 16Z"
									fill="currentColor"
								></path>{" "}
								<path
									d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z"
									fill="currentColor"
								></path>{" "}
							</g>
						</svg>
						Series
					</Link>
					<Link
						to="/favorites"
						className="hover:text-blue-400 p-5 text-sm group flex flex-col justify-center items-center duration-200 hover:bg-blue-900/20"
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

					<Link
						to="/profile"
						className="hover:text-blue-400 text-sm p-5 bg-gray-800 group flex flex-col justify-center items-center duration-200 hover:bg-blue-900/20"
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
								<path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"></path>
							</g>
						</svg>
						Profile
					</Link>
				</aside>

				<div className="flex-1 flex flex-col ml-20">
					<nav className="flex justify-between items-center bg-gray-800 text-white w-[calc(100vw-5rem)] py-5 px-6 max-h-[80px] fixed top-0 mb-20 z-50">
						<ul className="flex w-full justify-between items-center">
							<li>
								<button
									onClick={() => setSearchOpen(true)}
									className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white flex items-center gap-2"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
										/>
									</svg>
									<span className="hidden sm:inline">Search</span>
								</button>
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
									<div className="flex flex-row gap-2 justify-center items-center">
										<Link to="/profile">
											<img
												src={userImage}
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

					{searchOpen && (
						<>
							{/* Modal Backdrop */}
							<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
								{/* Modal Content */}
								<div className="bg-gray-900 rounded-2xl p-6 w-full max-w-xl relative shadow-lg">
									{/* Close Button */}
									<button
										onClick={() => {
											setSearchOpen(false);
											setSearch("");
										}}
										className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
										aria-label="Close search"
									>
										✕
									</button>

									{/* Search Input */}
									<input
										autoFocus
										type="text"
										placeholder="Search movies or series..."
										className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 mb-5 outline-none focus:ring-2 focus:ring-purple-500 transition"
										value={search}
										onChange={(e) => setSearch(e.target.value)}
									/>

									{/* Search Results */}
									{results.length > 0 ? (
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto">
											{results.map((item) => (
												<div
													key={item.id}
													className="flex items-center gap-4 p-3 bg-gray-800 rounded-xl hover:bg-purple-700 transition cursor-pointer"
													onClick={() => {
														setSearchOpen(false);
														setSearch("");
														navigate(`/${item.id}`);
													}}
												>
													<img
														src={item.image.replace("./images", "/images")}
														alt={item.title}
														className="w-14 h-20 object-cover rounded-md"
													/>
													<div>
														<div className="font-semibold text-white text-sm">
															{item.title}
														</div>
														<div className="text-xs text-gray-400">
															{item.type} • {item.year}
														</div>
													</div>
												</div>
											))}
										</div>
									) : search.trim() !== "" ? (
										<div className="text-gray-400 text-center">
											No results found.
										</div>
									) : null}
								</div>
							</div>

							{/* Transparent overlay for layering purposes */}
							<div className="fixed inset-0 z-40 bg-black opacity-0 pointer-events-none" />
						</>
					)}

					<main className="flex-1 max-h-[calc(100vh-80px)] overflow-y-auto mt-20">
						<Outlet />
					</main>

					<footer
						className={`bg-gray-800 text-white py-6 px-4 text-center w-full fixed bottom-0 transition-opacity duration-300 ${
							searchOpen ? "hidden" : ""
						}`}
					>
						<p className="text-sm md:text-base">
							© {new Date().getFullYear()}{" "}
							<span className="font-semibold text-purple-400">Streamly</span>.
							All rights reserved.
						</p>

						<ul className="flex justify-center space-x-6 mt-3 text-sm">
							<li>
								<Link
									to="/about"
									className="hover:text-purple-400 transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="hover:text-purple-400 transition-colors"
								>
									Privacy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="hover:text-purple-400 transition-colors"
								>
									Terms
								</Link>
							</li>
						</ul>
					</footer>
				</div>
			</div>
		</div>
	);
}

export default Nav;
