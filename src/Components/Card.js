import React from 'react';

function Card(props) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-w-[300px] max-w-md w-full rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            className="w-full h-full object-cover object-center"
            src={props.image}
            alt={`${props.title} poster`}
          />
        </div>
        
        {/* Content Section */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-purple-400 mb-2 text-center">
            {props.title}
          </h2>
          <p className="text-gray-300 text-base text-center mb-4">
            {props.year}
          </p>
        </div>
      </div>

      {/* Tags Section */}
      <div className="bg-gray-700/50 px-6 py-4 flex flex-wrap justify-center gap-2">
        <div className="badge bg-purple-600/20 text-purple-300">
          Rating: {props.rating}
        </div>
        <div className="badge bg-green-600/20 text-green-300">
          {props.genre}
        </div>
        <div className="badge bg-blue-600/20 text-blue-300">
          {props.director}
        </div>
      </div>
    </div>
  );
}


export default Card;