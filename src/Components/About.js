import React from "react";

function About() {
	return (
		<div className="bg-gray-700 text-white min-h-screen p-6 mb-20">
			<div className="max-w-4xl mx-auto">
				<header className="text-center mb-12">
					<img
						src="/images/logo.png"
						alt="Streamly Logo"
						className="h-64 mx-auto mb-6"
					/>
					<h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
						About Streamly
					</h1>
					<p className="text-xl text-gray-300">
						Your Ultimate Streaming Experience
					</p>
				</header>

				<section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h2>
					<p className="mb-4 text-gray-300">
						Streamly was created with a simple mission: to provide a seamless
						and enjoyable streaming experience for movie and series enthusiasts
						worldwide. We believe that great entertainment should be accessible,
						organized, and personalized.
					</p>
					<p className="text-gray-300">
						Our platform brings together the best movies and TV series across
						all genres, allowing you to discover new favorites while keeping
						track of the content you love.
					</p>
				</section>

				<section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold mb-4 text-blue-400">
						Key Features
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="border border-gray-700 p-4 rounded-lg">
							<h3 className="text-xl font-semibold mb-2 text-purple-400">
								Curated Collections
							</h3>
							<p className="text-gray-300">
								Discover expertly curated collections of movies and series based
								on genres, directors, actors, and themes.
							</p>
						</div>
						<div className="border border-gray-700 p-4 rounded-lg">
							<h3 className="text-xl font-semibold mb-2 text-purple-400">
								Personalized Recommendations
							</h3>
							<p className="text-gray-300">
								Our algorithm learns from your watching habits to recommend
								content tailored to your preferences.
							</p>
						</div>
						<div className="border border-gray-700 p-4 rounded-lg">
							<h3 className="text-xl font-semibold mb-2 text-purple-400">
								Favorites List
							</h3>
							<p className="text-gray-300">
								Save your favorite movies and series to watch later or revisit
								anytime.
							</p>
						</div>
						<div className="border border-gray-700 p-4 rounded-lg">
							<h3 className="text-xl font-semibold mb-2 text-purple-400">
								User Profiles
							</h3>
							<p className="text-gray-300">
								Create and customize your profile to enhance your streaming
								experience.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold mb-4 text-blue-400">Our Team</h2>
					<p className="mb-6 text-gray-300">
						Streamly is developed by a passionate team of film enthusiasts and
						skilled developers who are dedicated to creating the best streaming
						platform possible.
					</p>
					<div className="text-center">
						<p className="text-lg font-semibold text-gray-300">
							Have questions or feedback?
						</p>
						<a
							href="mailto:contact@streamly.example.com"
							className="text-blue-400 hover:underline"
						>
							contact@streamly.com
						</a>
					</div>
				</section>

				<section className="bg-gray-800 p-6 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold mb-4 text-blue-400">
						Technical Details
					</h2>
					<p className="mb-4 text-gray-300">
						Streamly is built using modern web technologies including:
					</p>
					<ul className="list-disc pl-6 text-gray-300 grid md:grid-cols-2 gap-2">
						<li>React for a responsive and dynamic user interface</li>
						<li>Firebase for secure authentication and data storage</li>
						<li>Tailwind CSS for beautiful and consistent styling</li>
						<li>JavaScript ES6+ for powerful functionality</li>
						<li>React Router for seamless navigation</li>
						<li>Responsive design for all device sizes</li>
					</ul>
				</section>
			</div>
		</div>
	);
}

export default About;
