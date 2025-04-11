// import React, { useState } from "react";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import "../App.css";

// function Login() {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [error, setError] = useState("");
// 	const navigate = useNavigate();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			await signInWithEmailAndPassword(auth, email, password);
// 			alert("User logged in successfully!");
// 			navigate("/");
// 		} catch (err) {
// 			setError(err.message);
// 			console.log(error);
// 		}
// 	};

// 	return (
// 		<div className="min-h-screen bg-gray-700 flex items-center justify-center">
// 			<div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 max-w-md w-full">
// 				<form onSubmit={handleSubmit} className="flex flex-col items-center">
// 					<h1 className="text-2xl font-semibold text-gray-200 mb-6">
// 						Please sign in
// 					</h1>
					
// 					{error && (
// 						<div className="bg-red-600 bg-opacity-20 border border-red-500 text-red-400 p-3 rounded-lg mb-4 w-full">
// 							{error}
// 						</div>
// 					)}
					
// 					<div className="w-full mb-4">
// 						<input
// 							type="email"
// 							className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// 							name="email"
// 							placeholder="Enter e-mail"
// 							required
// 							onChange={(e) => setEmail(e.target.value)}
// 							value={email}
// 						/>
// 					</div>
					
// 					<div className="w-full mb-6">
// 						<input
// 							type="password"
// 							className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// 							name="password"
// 							placeholder="Password"
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 							required
// 						/>
// 					</div>
					
// 					<button
// 						type="submit"
// 						className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors w-full"
// 					>
// 						Sign in
// 					</button>
					
// 					<p className="text-gray-400 mt-4">
// 						Don't have an account?{" "}
// 						<a href="/register" className="text-blue-400 hover:text-blue-300">
// 							Register
// 						</a>
// 					</p>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// export default Login;
import React, { useState } from "react";
import { auth } from "../firebase";
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const provider = new GoogleAuthProvider();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			alert("User logged in successfully!");
			navigate("/");
		} catch (err) {
			setError(err.message);
			console.log(err.message);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			await signInWithPopup(auth, provider);
			alert("Logged in with Google!");
			navigate("/");
		} catch (err) {
			setError(err.message);
			console.log(err.message);
		}
	};

	return (
		<div className="min-h-screen bg-gray-700 flex items-center justify-center">
			<div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 max-w-md w-full">
				<form onSubmit={handleSubmit} className="flex flex-col items-center">
					<h1 className="text-2xl font-semibold text-gray-200 mb-6">
						Please sign in
					</h1>

					{error && (
						<div className="bg-red-600 bg-opacity-20 border border-red-500 text-red-400 p-3 rounded-lg mb-4 w-full">
							{error}
						</div>
					)}

					<div className="w-full mb-4">
						<input
							type="email"
							className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							name="email"
							placeholder="Enter e-mail"
							required
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>

					<div className="w-full mb-6">
						<input
							type="password"
							className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							name="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<button
						type="submit"
						className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors w-full mb-4"
					>
						Sign in
					</button>

					<button
						type="button"
						onClick={handleGoogleSignIn}
						className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors w-full mb-4"
					>
						Sign in with Google
					</button>

					<p className="text-gray-400 mt-2">
						Don't have an account?{" "}
						<a href="/register" className="text-blue-400 hover:text-blue-300">
							Register
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login;
