// import { useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore"; // Firestore functions
// import { db } from "../firebase"; 
// import { updateProfile } from "firebase/auth"
// import { useNavigate } from "react-router-dom";

// import "../App.css";

// function Register() {
// 	const [username, setUsername] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [confirmPassword, setConfirmPassword] = useState("");
// 	const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (password !== confirmPassword) {
// 			setError("Passwords do not match");
// 			console.log(error);
// 			return;
// 		}
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       await updateProfile(user, { displayName: username });
//       // Store username in Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         username: username,
//         email: email,
//       });

//       alert("User registered successfully!");
//     } catch (err) {
//       setError(err.message);
//     }	try {
// 			await createUserWithEmailAndPassword(auth, email, password);
// 			alert("User created successfully!");
//       navigate("/");

// 		} catch (err) {
// 			{
// 				setError(err.message);
//         await sleep(2000);
// 			}
// 			setError("");
// 			console.log("Username:", username);
// 			console.log("Email:", email);
// 			console.log("Password :", password);
// 		}
// 	};
// 	return (
// 		<div className="h-screen bg-gray-200">
// 			<div className="flex flex-row justify-center items-center h-screen">
// 				<div className="flex flex-col justify-evenly items-center bg-white p-10 rounded-lg shadow-lg mx-auto">
// 					<form
// 						onSubmit={handleSubmit}
// 						className="flex flex-col justify-center items-center"
// 					>
// 						<h1 className="text-3xl p-2 font-weight-normal flex justify-center">
// 							Create an Account
// 						</h1>
// 						<div className="mt-2 flex flex-col justify-between">
// 							<input
// 								type="text"
// 								className="textbox"
// 								name="name"
// 								placeholder="Enter username"
// 								value={username}
// 								onChange={(e) => setUsername(e.target.value)}
// 								required
// 							/>
// 						</div>
// 						<div className="mt-2 flex flex-col justify-between">
// 							<input
// 								type="email"
// 								className="textbox"
// 								name="email"
// 								placeholder="Enter email"
// 								value={email}
// 								onChange={(e) => setEmail(e.target.value)}
// 								required
// 							/>
// 						</div>
// 						<div className="flex flex-col mt-2 justify-between">
// 							<input
// 								type="password"
// 								className="textbox"
// 								name="password"
// 								placeholder="Enter password"
// 								value={password}
// 								onChange={(e) => setPassword(e.target.value)}
// 								required
// 							/>
// 						</div>
// 						<div className="flex flex-col mt-2 justify-between">
// 							<input
// 								type="password"
// 								className="textbox"
// 								name="confirmPassword"
// 								placeholder="Confirm password"
// 								value={confirmPassword}
// 								onChange={(e) => setConfirmPassword(e.target.value)}
// 								required
// 							/>
// 						</div>
// 						<div className="flex justify-center flex-col gap-2">
// 							<button type="submit" className="Btn mt-2">
// 								Register
// 							</button>
// 							{error ? (
// 								<p className="text-red-500">{error}</p>
// 							) : (
// 								// <p className="text-green-600">Account created succesfully</p>
//                 null
// 							)}
// 						</div>
// 						<div>
// 							<h1 className="text-sm p-2 font-weight-normal flex justify-center">
// 								Already have an account? &nbsp;{" "}
// 								<a href="/login" className="text-blue-400">
// 									Sign in
// 								</a>
// 							</h1>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Register;
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (password !== confirmPassword) {
          setError("Passwords do not match");
          return;
      }
  
      try {
          // Create user
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log(1)
          // Update display name
          await updateProfile(user, { displayName: username });
          console.log(2)
          // Store username in Firestore
          await setDoc(doc(db, "users", user.uid), {
              username,
              email,
          });
          console.log(3)
          alert("User registered successfully!"); // Trigger alert here
          navigate("/"); // Redirect after success
      } catch (err) {
          setError(err.message);
      }
  };
  
    return (
        <div className="h-screen bg-gray-200">
            <div className="flex flex-row justify-center items-center h-screen">
                <div className="flex flex-col justify-evenly items-center bg-white p-10 rounded-lg shadow-lg mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl p-2 font-weight-normal flex justify-center">Create an Account</h1>

                        <input
                            type="text"
                            className="textbox mt-2"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            className="textbox mt-2"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            className="textbox mt-2"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            className="textbox mt-2"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="Btn mt-2">
                            Register
                        </button>

                        {error && <p className="text-red-500 mt-2">{error}</p>}

                        <p className="text-sm p-2 font-weight-normal flex justify-center">
                            Already have an account? &nbsp;
                            <a href="/login" className="text-blue-400">Sign in</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
