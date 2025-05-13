import React, { useEffect, useState } from "react";
import Card from "./Card";
import AddToFavourites from "./AddToFavourites";

const Trending = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/arr.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort by rating descending, take top 12
        const trending = data.sort((a, b) => b.rating - a.rating).slice(0, 12);
        setItems(trending);
      });
  }, []);

  return (
    <div className="container mx-auto p-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Trending Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <Card
              id={item.id}
              image={item.image}
              title={item.title}
              year={item.year}
              rating={item.rating}
              genre={item.genre}
              director={item.director}
            />
            <AddToFavourites id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
