import "./App.css";
import Create from "./create";

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
