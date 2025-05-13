import React from "react";
import { Link } from "react-router-dom";
import AddToFavourites from "./AddToFavourites";

function Card(props) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-full rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300">
      <Link to={`/${props.id}`}>
        <div className="flex flex-col">
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover object-center"
              src={props.image}
              alt={`${props.title} poster`}
            />
            <div
              className="absolute top-2 right-2 z-10"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <AddToFavourites id={props.id} />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full p-4 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-purple-400 mb-2 text-center truncate">
              {props.title}
            </h2>
            <p className="text-gray-300 text-sm text-center mb-2">{props.year}</p>
          </div>

          {/* Tags Section */}
          <div className="bg-gray-700/50 px-4 py-3 flex flex-wrap justify-center gap-2">
            <div className="badge bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded">
              {props.rating}/10
            </div>
            <div className="badge bg-green-600/20 text-green-300 text-xs px-2 py-1 rounded truncate max-w-full">
              {props.genre}
            </div>
            <div className="badge bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded truncate max-w-full">
              {props.director}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
