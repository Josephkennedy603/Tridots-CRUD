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
import { db } from "./firebase";

export const userCollectionRef = collection(db, "record");
console.log("user data1", userCollectionRef);

function App() {
  return (
    <div className="main-container">
      <h1>CRUD Operation</h1>
      <Create />

      {/* ProductName,
    Price,
    oldPrice,
    Categorytype,
    isactive,
    description, */}
      <table border={2}>
        <tbody>
          <tr>
            <th>ProductName</th>
            <th>Price</th>
            <th>oldPrice</th>
            <th>Categorytype</th>
            <th>isactive</th>
            <th>description</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
