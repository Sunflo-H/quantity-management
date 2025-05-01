import "./App.css";
import ExcelReader from "./components/ExcelReader";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBbkCm8B70Qi2aPMuL-YKZEZc7_ieAqwH0",
  authDomain: "nordisk-management.firebaseapp.com",
  projectId: "nordisk-management",
  storageBucket: "nordisk-management.firebasestorage.app",
  messagingSenderId: "601807263512",
  appId: "1:601807263512:web:1ae00c6b549c67fe8c706d",
  measurementId: "G-C7R3BKE0LD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

console.log(database);
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

function App() {
  return (
    <div className="App">
      <ExcelReader />
      <div onClick={() => writeUserData(1, "홍길동", "gd@google.com", "")}>
        클릭{" "}
      </div>
    </div>
  );
}

export default App;
