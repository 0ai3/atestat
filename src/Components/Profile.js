import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
	const { currentUser } = useAuth();
	const [username, setUsername] = useState("");
	const [newUsername, setNewUsername] = useState("");
	const [email, setEmail] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [error, setError] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [profilePics, setProfilePics] = useState([]);

	useEffect(() => {
		if (currentUser) {
			setUsername(currentUser.displayName || "User");
			setEmail(currentUser.email);
		}
		fetch("/profilePicArr.json")
			.then((response) => response.json())
			.then((data) => setProfilePics(data));
	}, [currentUser]);

	const handleChangeUsername = async () => {
		if (newUsername && newUsername.trim() !== "") {
			try {
				await updateProfile(currentUser, {
					displayName: newUsername.trim(),
				});
				await updateDoc(doc(db, "users", currentUser.uid), {
					displayName: newUsername.trim(),
				});
				setUsername(newUsername.trim());
				setNewUsername("");
				alert("Username updated successfully!");
			} catch (err) {
				setError(err.message);
			}
		} else {
			setError("Username cannot be empty");
		}
	};

	const handleChangeEmail = async () => {
		if (newEmail) {
			try {
				await updateEmail(currentUser, newEmail);
				await updateDoc(doc(db, "users", currentUser.uid), { email: newEmail });
				setEmail(newEmail);
				alert("Email updated successfully!");
				setNewEmail("");
			} catch (err) {
				setError(err.message);
			}
		}
	};

	const handleChangePassword = async () => {
		if (newPassword) {
			try {
				await updatePassword(currentUser, newPassword);
				alert("Password updated successfully!");
				setNewPassword("");
			} catch (err) {
				setError(err.message);
			}
		}
	};

	const handleChangeProfilePic = async (picId) => {
		try {
			const selectedPic = profilePics.find((pic) => pic.id === picId);
			await updateProfile(currentUser, {
				photoURL: selectedPic.imageLink,
			});
			await updateDoc(doc(db, "users", currentUser.uid), {
				photoURL: selectedPic.imageLink,
			});
			alert("Profile picture updated!");
			setIsModalOpen(false);
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="min-h-screen bg-gray-700 text-gray-100 overflow-y-auto">
			<div className="container mx-auto max-w-md px-4 py-6">
				<div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
					{/* Profile Picture */}
					<div className="flex flex-col items-center mb-6">
						<img
							src={currentUser?.photoURL || "/images/Sample_User_Icon.png"}
							alt="Profile"
							className="w-36 h-36 object-cover rounded-full border-4 border-gray-600 hover:border-blue-500 transition-all cursor-pointer mb-4"
							onClick={() => setIsModalOpen(true)}
						/>
						<h2 className="text-xl font-semibold text-gray-200">{username}</h2>
						<p className="text-gray-400">{email}</p>
					</div>

					{/* Change Username */}
					<div className="mb-6">
						<h3 className="text-lg font-medium text-gray-300 mb-3">
							Change Username
						</h3>
						<div className="flex space-x-2">
							<input
								type="text"
								className="flex-grow bg-gray-700 border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter new username"
								value={newUsername}
								onChange={(e) => setNewUsername(e.target.value)}
							/>
							<button
								onClick={handleChangeUsername}
								className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
							>
								Update
							</button>
						</div>
					</div>

					{/* Change Email */}
					<div className="mb-6">
						<h3 className="text-lg font-medium text-gray-300 mb-3">
							Change Email
						</h3>
						<div className="flex space-x-2">
							<input
								type="email"
								className="flex-grow bg-gray-700 border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter new email"
								value={newEmail}
								onChange={(e) => setNewEmail(e.target.value)}
							/>
							<button
								onClick={handleChangeEmail}
								className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
							>
								Update
							</button>
						</div>
					</div>

					{/* Change Password */}
					<div className="mb-6">
						<h3 className="text-lg font-medium text-gray-300 mb-3">
							Change Password
						</h3>
						<div className="flex space-x-2">
							<input
								type="password"
								className="flex-grow bg-gray-700 border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter new password"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>
							<button
								onClick={handleChangePassword}
								className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
							>
								Update
							</button>
						</div>
					</div>

					{/* Error Message */}
					{error && (
						<div className="bg-red-600 bg-opacity-20 border border-red-500 text-red-400 p-3 rounded-lg mb-4">
							{error}
						</div>
					)}
				</div>
			</div>

			{/* Profile Picture Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 overflow-y-auto">
					<div className="bg-gray-800 rounded-xl shadow-2xl w-11/12 max-w-md p-6 relative border border-gray-700 my-6">
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 text-2xl"
						>
							&times;
						</button>
						<h2 className="text-xl font-semibold text-center mb-6 text-gray-200">
							Choose Profile Picture
						</h2>
						<div className="grid grid-cols-2 gap-4 justify-items-center">
							{profilePics.map((img) => (
								<img
									key={img.id}
									src={img.imageLink}
									alt="Profile"
									className="w-24 h-24 object-cover rounded-lg border-2 border-gray-600 hover:border-blue-500 cursor-pointer transition-all"
									onClick={() => handleChangeProfilePic(img.id)}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
