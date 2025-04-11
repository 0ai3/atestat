// import '../app.css';
// Import necessary modules
import { auth } from '../firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";

const MainPage = () => {
    const [username, setUsername] = useState("Guest");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsername(user.displayName || "User");
            } else {
                setUsername("Guest");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className='h-64 overflow-y-auto p-4'>
            <h1>Welcome, {username}</h1>
        </div>
    );
};

export default MainPage;
