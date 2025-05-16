import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function VideoPage() {
	const [videos, setVideos] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();
	const [selectedSeason, setSelectedSeason] = useState(1);
	const [selectedEpisode, setSelectedEpisode] = useState(1);

	useEffect(() => {
		fetch("/arr.json")
			.then((response) => response.json())
			.then((data) => setVideos(data));
	}, []);

	const video = videos.find((v) => v.id === parseInt(id));

	useEffect(() => {
		if (videos.length > 0 && !video) {
			navigate("/404", { replace: true });
		}
	}, [videos, video, navigate]);

	const handleSeasonChange = (e) => {
		setSelectedSeason(parseInt(e.target.value));
		setSelectedEpisode(1);
	};

	const handleEpisodeChange = (e) => {
		setSelectedEpisode(parseInt(e.target.value));
	};

	if (!video)
		return <div className="text-white text-center mt-10">Loading...</div>;

	const recommendedVideos = videos
		.filter((v) => v.genre === video.genre && v.id !== video.id)
		.slice(0, 8);

	const isSeries = video.type === "Series";

	return (
		<div className="bg-gray-700 text-white min-h-screen p-4">
			<div className="max-w-5xl mx-auto">
				<div className="aspect-w-16 aspect-h-9 mb-6">
					{isSeries ? (
						<iframe
							src={`https://vidora.su/tv/${video.imdb}/${selectedSeason}/${selectedEpisode}?autoplay=false&colour=00ff9d&backbutton=https://www.youtube.com/watch?v=E4WlUXrJgy4&logo=https://vidora.su/logo.png`}
							className="w-full h-[60vh] rounded-lg border border-gray-700 shadow-lg"
							allowfullscreen
							allow="fullscreen"
						/>
					) : (
						<iframe
							src={`https://vidora.su/movie/${video.imdb}?autoplay=false&colour=00ff9d&backbutton=https://www.youtube.com/watch?v=E4WlUXrJgy4&logo=https://vidora.su/logo.png`}
							className="w-full h-[60vh] rounded-lg border border-gray-700 shadow-lg"
							allowfullscreen
							allow="fullscreen"
						/>
					)}
				</div>
				<h1 className="text-3xl font-bold mb-2">{video.title}</h1>
				<p className="text-gray-400 mb-4 text-sm">
					{video.year} • {video.genre} • Directed by {video.director}
				</p>
				<p className="text-gray-300 mb-6">
					An engaging and critically acclaimed {video.type.toLowerCase()} with a
					rating of {video.rating}/10.
				</p>
				{isSeries && (
					<div className="mb-8 bg-gray-800 p-6 rounded-xl shadow-lg">
						<h3 className="text-lg font-semibold text-blue-400 mb-4">
							Choose Season & Episode
						</h3>
						<div className="mb-6">
							<label
								className="block text-sm text-gray-300 mb-1"
								htmlFor="season-select"
							>
								Select Season
							</label>
							<select
								id="season-select"
								value={selectedSeason}
								onChange={handleSeasonChange}
								className="w-full bg-gray-900 text-white p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
							>
								{Array.from({ length: video.seasons }, (_, i) => (
									<option key={i + 1} value={i + 1}>
										Season {i + 1}
									</option>
								))}
							</select>
						</div>
						<div>
							<label
								className="block text-sm text-gray-300 mb-1"
								htmlFor="episode-select"
							>
								Select Episode
							</label>
							<select
								id="episode-select"
								value={selectedEpisode}
								onChange={handleEpisodeChange}
								className="w-full bg-gray-900 text-white p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150"
							>
								{Array.from(
									{ length: video[`season${selectedSeason}episodes`] },
									(_, i) => (
										<option key={i + 1} value={i + 1}>
											Episode {i + 1}
										</option>
									)
								)}
							</select>
						</div>
					</div>
				)}
				<h2 className="text-xl font-semibold mb-2">More like this</h2>
				<div className="mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{recommendedVideos.slice(0, 8).map((v) => (
						<Link
							key={v.id}
							to={`/${v.id}`}
							className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"
						>
							<img
								src={v.image}
								alt={v.title}
								className="w-full h-32 object-cover mb-2 rounded"
							/>
							<h3 className="text-sm font-medium">{v.title}</h3>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default VideoPage;
