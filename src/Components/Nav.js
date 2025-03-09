import { Link, Outlet } from "react-router-dom";

const isLogged = true; // Change to false for testing
const userProfilePic = "";

function Nav() {
	return (
		<div className="flex">
			<aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6 fixed">
				<ul className="space-y-6">
					<li>{/* Logo */}</li>
					<li>
						<Link to="/" className="hover:text-blue-400 text-lg">
							Home
						</Link>
					</li>
					<li>
						<Link to="/trending" className="hover:text-blue-400 text-lg">
							Trending
						</Link>
					</li>
					<li>
						<Link to="/favorites" className="hover:text-blue-400 text-lg">
							Favorites
						</Link>
					</li>
					<li>
						<Link to="/profile" className="hover:text-blue-400 text-lg">
							Profile
						</Link>
					</li>
					<li>{/* Toggle Night Mode (Future Feature) */}</li>
				</ul>
			</aside>

			<nav className="flex justify-between items-center bg-gray-800 text-white w-full py-4 px-6 ml-64">
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
						{isLogged ? (
							<Link to="/profile">
								<img
									src={userProfilePic}
									alt="Profile"
									className="w-10 h-10 rounded-full border-2 border-blue-400 hover:border-blue-500 transition"
								/>
							</Link>
						) : (
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
						)}
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}

export default Nav;
