import Card from "./Card";
import React, { useState, useEffect } from "react";

function SeriesCarousel() {
	const [Series, setSeries] = useState([]);

	useEffect(() => {
		fetch("/arr.json")
			.then((response) => response.json())
			.then((data) => setSeries(data));
	}, []);
	return (
		<div className="relative z-0">
    <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] whitespace-nowrap flex space-x-4 p-4">
        {Series
            .filter((series) => series.type === "Series")
            .map((series) => (
                <Card
                    key={series.id}
                    title={series.title}
                    year={series.year}
                    genre={series.genre}
                    director={series.director}
                    rating={series.rating}
                    image={series.image}
                />
            ))}
    </div>
</div>

	);
}
export default SeriesCarousel;
