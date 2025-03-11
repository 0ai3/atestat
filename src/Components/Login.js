import React, { useState } from "react";
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "../App.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


	const handleSubmit = async (e) => {
		e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User logged in successfully!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
		console.log("Email:", email);
		console.log("Password :", password);
	};

	return (
		<div className="h-screen bg-gray-200">
			<div className="flex flex-row justify-center items-center h-screen">
				<div className="flex flex-col justify-evenly items-center bg-white p-10 rounded-lg shadow-lg mx-auto">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col justify-center items-center"
					>
						<h1 className="text-3xl p-2 font-weight-normal flex justify-center">
							Please sign in
						</h1>
						<div className="mt-2 flex flex-col justify-between">
							<input
								type="email"
								className="textbox"
								name="email"
								placeholder="Enter e-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
							/>
						</div>
						<div className="flex flex-col mt-2 justify-between">
							<input
								type="password"
								className="textbox"
								name="password"
								placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
							/>
						</div>
						<div className="flex justify-center">
							<button type="submit" className="Btn mt-2">
								Sign in
							</button>
						</div>
						<div>
							<h1 className="text-sm p-2 font-weight-normal flex justify-center">
								Don't have an account? &nbsp;{" "}
								<a href="/register" className="text-blue-400">
									Register
								</a>
							</h1>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
