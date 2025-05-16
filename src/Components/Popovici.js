import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function VideoPage() {
    const [showVideo, setShowVideo] = useState(false);
    const [showThumbnail, setShowThumbnail] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [isLooping, setIsLooping] = useState(false);
    const videoRef = useRef(null);
    const adClickCount = useRef(0);
    const [volume, setVolume] = useState(1);

    const recommendedVideos = [
        {
            id: 1,
            image: "/images/Interstellar.jpg",
            title: "Interstellar",
        },
        {
            id: 2,
            image: "/images/Inception.jpg",
            title: "Inception",
        },
        {
            id: 3,
            image: "/images/Joker.jpg",
            title: "Joker",
        },
        {
            id: 4,
            image: "/images/Gladiator.jpg",
            title: "Gladiator",
        },
    ];
    const video = {
       id: 52,
       title: "David Popovici",
       year: 2025,
       genre: "Action",
       director: "Nu vreti sa stiti",
       rating: 10.0,
       type: "Movie",
       image: "./images/Popovici_Poster.jpg"

    };

    const adLinks = [
        "https://welcome.vladcazino.ro/ro/ppc/casino-online/bonus-bun-venit-exclusiv2024/index.html?ch=paid_search",
        "https://promos-ro.betano.com/444-rotiri-gratuite-vara-aceasta/index.html",
        "https://www.unibet.ro/casino",
        "https://casino.netbet.ro/",
        "https://winbet.ro/casino",
    ];

    function openRandomAd() {
        const randomIndex = Math.floor(Math.random() * adLinks.length);
        window.open(adLinks[randomIndex], "_blank");
    }

    const handleThumbnailClick = () => {
        adClickCount.current++;
        if (adClickCount.current < 3) {
            openRandomAd();
        }
        if (adClickCount.current === 3) {
            setShowThumbnail(false);
            setShowVideo(true);
            adClickCount.current = 0;
        }
    };
    const handleVolumeChange = (e) => {
        const video = videoRef.current;
        const newVolume = parseFloat(e.target.value);
        if (video) {
            video.volume = newVolume;
        }
        setVolume(newVolume);
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
        const video = videoRef.current;
        if (video) {
            setDuration(video.duration);
        }
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        const time = parseFloat(e.target.value);
        if (video) {
            video.currentTime = time;
            setCurrentTime(time);
        }
    };

    const toggleFullScreen = () => {
        const video = videoRef.current;
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    };

    const changePlaybackRate = () => {
        const video = videoRef.current;
        if (!video) return;
        const rates = [0.5, 1, 1.5, 2];
        const currentIndex = rates.indexOf(playbackRate);
        const nextIndex = (currentIndex + 1) % rates.length;
        const newRate = rates[nextIndex];
        video.playbackRate = newRate;
        setPlaybackRate(newRate);
    };

    const seek = (seconds) => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = Math.min(
            Math.max(0, video.currentTime + seconds),
            duration
        );
    };

    const toggleLoop = () => {
        const video = videoRef.current;
        if (!video) return;
        video.loop = !isLooping;
        setIsLooping(!isLooping);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    useEffect(() => {
        if (!showVideo) return;
        let timer = null;
        let isPaused = false;
        const handlePause = () => {
            isPaused = true;
            resetInactivity();
        };
        const handlePlay = () => {
            isPaused = false;
            if (timer) clearTimeout(timer);
        };
        const resetInactivity = () => {
            if (timer) clearTimeout(timer);
            if (isPaused) {
                timer = setTimeout(() => {
                    setShowVideo(false);
                    setShowThumbnail(true);
                    adClickCount.current = 0;
                }, 5000);
            }
        };
        const activityEvents = ["mousemove", "keydown", "mousedown", "touchstart"];
        activityEvents.forEach((e) => window.addEventListener(e, resetInactivity));
        const videoElem = videoRef.current;
        if (videoElem) {
            videoElem.addEventListener("pause", handlePause);
            videoElem.addEventListener("play", handlePlay);
        }
        return () => {
            if (timer) clearTimeout(timer);
            activityEvents.forEach((e) =>
                window.removeEventListener(e, resetInactivity)
            );
            if (videoElem) {
                videoElem.removeEventListener("pause", handlePause);
                videoElem.removeEventListener("play", handlePlay);
            }
        };
    }, [showVideo]);

    return (
        <div className="bg-gray-700 text-white min-h-screen p-4">
            <div className="max-w-5xl mx-auto">
                {showThumbnail ? (
                    <div className="aspect-w-16 aspect-h-9 mb-6 flex items-center justify-center">
                        <div
                            className="relative w-full h-full flex flex-col items-center justify-center cursor-pointer"
                            onClick={handleThumbnailClick}
                            style={{ cursor: "pointer" }}
                        >
                            <svg
                                fill="#ffffff"
                                width="106px"
                                height="106px"
                                viewBox="0 0 24.00 24.00"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                style={{ cursor: "pointer" }}
                                stroke="#ffffff"
                                // stroke-width="2.16"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M7.555,3.168A1,1,0,0,0,6,4V20a1,1,0,0,0,1.555.832l12-8a1,1,0,0,0,0-1.664ZM8,18.131V5.869L17.2,12Z"></path>
                                </g>
                            </svg>
                            <img
                                src="/images/popovici.jpeg"
                                alt="Thumbnail"
                                className="w-full h-full object-cover rounded-lg shadow-lg opacity-80"
                            />
                        </div>
                    </div>
                ) : showVideo ? (
                    <div className="aspect-w-16 aspect-h-9 mb-6 relative">
                        <video
                            ref={videoRef}
                            className="w-full max-h-[60vh] rounded-lg shadow-lg"
                            autoPlay
                            onClick={togglePlay}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            src="/Videos/Popovici.MOV"
                        />
                        {/* Custom Controls */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex flex-col opacity-0 hover:opacity-100 transition-opacity duration-300">
                            {/* Progress Bar */}
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                step="0.1"
                                value={currentTime}
                                onChange={handleSeek}
                                className="w-full mb-2"
                            />

                            <div className="flex items-center justify-between text-sm text-white">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        {formatTime(currentTime)} / {formatTime(duration)}
                                    </div>
                                    {/* Volume Slider */}
                                    <div className="flex items-center space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7 9v6h4l5 5V4l-5 5H7z" />
                                        </svg>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={volume}
                                            onChange={handleVolumeChange}
                                            className="w-24"
                                        />
                                    </div>
                                </div>

                                <div className="space-x-4 flex items-center">
                                    <button
                                        onClick={() => seek(-10)}
                                        className="focus:outline-none"
                                    >
                                        {/* Rewind 10s Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M11 18V6l-8.5 6L11 18zm1-12v12l8.5-6L12 6z" />
                                        </svg>
                                    </button>
                                    <button onClick={togglePlay} className="focus:outline-none">
                                        {isPlaying ? (
                                            // Pause Icon
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="white"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                            </svg>
                                        ) : (
                                            // Play Icon
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="white"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        )}
                                    </button>
                                    <button
                                        onClick={() => seek(10)}
                                        className="focus:outline-none"
                                    >
                                        {/* Forward 10s Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M13 6v12l8.5-6L13 6zm-1 0L3.5 12 12 18V6z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={changePlaybackRate}
                                        className="focus:outline-none"
                                    >
                                        {/* Speed Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 .34-.03.67-.08 1h2.02c.04-.33.06-.66.06-1 0-4.42-3.58-8-8-8zm-6 7c0-.34.03-.67.08-1H4.06c-.04.33-.06.66-.06 1 0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6z" />
                                        </svg>
                                        <span className="ml-1">{playbackRate}x</span>
                                    </button>
                                    <button onClick={toggleLoop} className="focus:outline-none">
                                        {/* Loop Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill={isLooping ? "green" : "white"}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7 7h10V4l5 4-5 4V9H7c-1.66 0-3 1.34-3 3 0 .34.05.66.14.96l1.66-1.21L3.36 15l2.44 3.25-1.63-1.19C3.42 16.42 3 15.26 3 14c0-2.76 2.24-5 5-5zm10 10H7v3l-5-4 5-4v3h10c1.66 0 3-1.34 3-3 0-.34-.05-.66-.14-.96l-1.66 1.21L20.64 9l-2.44-3.25 1.63 1.19c1.19.87 1.81 2.03 1.81 3.31 0 2.76-2.24 5-5 5z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={toggleFullScreen}
                                        className="focus:outline-none"
                                    >
                                        {/* Fullscreen Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 4h-2v3h-3v2h5v-5zm-2-4h2V5h-5v2h3v3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
                <p className="text-gray-400 mb-4 text-sm">
                    {video.year} • {video.genre} • Directed by {video.director}
                </p>
                <p className="text-gray-300 mb-6">
                    An engaging and critically acclaimed {video.type.toLowerCase()} with a
                    rating of {video.rating}/10.
                </p>
                {/* Recommended Videos */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Recommended Videos</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 mb-20 gap-4">
                        {recommendedVideos.map((rec) => (
                            <Link
                                to={`/${rec.id}`}
                                key={rec.id}
                                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition"
                            >
                                <img
                                    src={rec.image}
                                    alt={rec.title}
                                    className="w-full h-40 object-cover rounded"
                                />
                                <h4 className="mt-2 text-sm font-semibold text-white">
                                    {rec.title}
                                </h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPage;
