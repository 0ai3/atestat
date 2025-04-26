import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
   
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-full rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300">
       <Link
    to={`/${props.id}`}>
      <div className="flex flex-col">
        <div className="w-full h-48">
          <img
            className="w-full h-full object-cover object-center"
            src={props.image}
            alt={`${props.title} poster`}
          />

          <button className="absolute top-2 right-2 transition"
          onClick={() => props.onButtonClick(props.id)}>
            <svg
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-fill=""
              className=" rounded-full p-1 bg-gray-300/50 w-5 h-5 group-hover:bg-gray-400/50 hover:scale-110 transition duration-200"
              stroke="#ffffff"
              data-darkreader-inline-stroke=""
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
								<path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"></path>
							</g>
						</svg>
					</button>
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
