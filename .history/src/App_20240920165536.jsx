import "./App.css";
import Create from "./create";
import { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("productdetails", products);
    // getUsers();
    const snapShot = onSnapshot(userCollectionRef, (snapshotparm) => {
      setProducts(
        snapshotparm.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });

    return () => snapShot();
  }, []);
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
