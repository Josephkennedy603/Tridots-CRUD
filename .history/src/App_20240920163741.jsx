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
      <table>
        <tbody>
          <tr>ProductName</tr>
          <tr>Price</tr>
          <tr>oldPrice</tr>
          <tr>Categorytype</tr>
          <tr>isactive</tr>
          <tr>description</tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
