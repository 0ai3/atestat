import { useState, useRef } from "react";

function Thumbnail() {
	let nrClickRamase = useRef(2);

	let [afiseazaVideo, setAfiseazaVideo] = useState(false);

	const clickButton = () => {
		nrClickRamase.current--;
		if (nrClickRamase.current === 0) {
			setAfiseazaVideo(true);
		}
	};

	return (
		<div>
			{afiseazaVideo ? (
				<div>video</div>
			) : (
				<div>
					<button onClick={clickButton}>Click me</button>
				</div>
			)}
		</div>
	);
}

export default Thumbnail;
