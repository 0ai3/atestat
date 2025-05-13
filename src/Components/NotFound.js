import React from "react";

function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-white tracking-wide animate-bounce mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
