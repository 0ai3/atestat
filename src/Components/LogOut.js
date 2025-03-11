import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function LogOut() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        }
      }
    };
    fetchUsername();
  }, []);

  return (
    <div>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
}

export default LogOut;
