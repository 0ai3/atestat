import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function VideoPage() {
	const [videos, setVideos] = useState([]);
	const { id } = useParams();
	const lastClick = useRef(0);

	useEffect(() => {
		fetch("/arr.json")
			.then((response) => response.json())
			.then((data) => setVideos(data));
	}, []);

	const video = videos.find((v) => v.id === parseInt(id));

	const openAd = (e) => {
		if (Date.now() - lastClick.current > 10000) {
			e.preventDefault();
			window.open("https://www.youtube.com/watch?v=3JZ_D3ELwOQ", "_blank");
		}
		lastClick.current = Date.now();
	};

	if (!video) return <div className="text-white text-center mt-10">Loading...</div>;

	// Generate several random IDs between 0 and 50, excluding the current video's ID
	const getRandomIds = (count, exclude) => {
		const randomIds = new Set();
		while (randomIds.size < count) {
			const randomId = Math.floor(Math.random() * 51); // 0-50 inclusive
			if (randomId !== exclude) {
				randomIds.add(randomId);
			}
		}
		return Array.from(randomIds);
	};

	// Get random recommended videos
	const randomIds = getRandomIds(9, parseInt(id));
	const recommendedVideos = videos.filter(v => randomIds.includes(v.id));

	return (
		<div className="bg-gray-700 text-white min-h-screen p-4">
			<div className="max-w-5xl mx-auto">
				{/* Video Player */}
				<div className="aspect-w-16 aspect-h-9 mb-6">
					<video
						onClick={openAd}
						controls
						className="w-full h-full rounded-lg border border-gray-700 shadow-lg"
					>
						<source src={video.video} type="link" />
						Your browser does not support the video tag.
					</video>
				</div>

				{/* Video Info */}
				<h1 className="text-3xl font-bold mb-2">{video.title}</h1>
				<p className="text-gray-400 mb-4 text-sm">
					{video.year} • {video.genre} • Directed by {video.director}
				</p>

				{/* You could include a short description or add rating, etc. */}
				<p className="text-gray-300 mb-6">
					An engaging and critically acclaimed {video.type.toLowerCase()} with a rating of {video.rating}/10.
				</p>

				{/* Optional Episode Grid or Related Content */}
				<h2 className="text-xl font-semibold mb-2">More like this</h2>
				<div className="mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{recommendedVideos
						.slice(0, 8) // ensure we only show 8 items
						.map((v) => (
							<a
								key={v.id}
								href={`/${v.id}`}
								className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"
							>
								<img
									src={v.image}
									alt={v.title}
									className="w-full h-32 object-cover mb-2 rounded"
								/>
								<h3 className="text-sm font-medium">{v.title}</h3>
							</a>
						))}
				</div>
			</div>
		</div>
	);
}

export default VideoPage;
