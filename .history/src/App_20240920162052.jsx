import "./App.css";
import Create from "./create";
import {
  collection,
  getDocs,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
export const userCollectionRef = collection(db, "record");
console.log("user data1", userCollectionRef);

function App() {
  return (
    <div className="main-container">
      <h1>CRUD Operation</h1>
      {/* <Create  refetchUser={getUsers} /> */}
      <Create />
    </div>
  );
}

export default App;
