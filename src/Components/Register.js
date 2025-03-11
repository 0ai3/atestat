
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
