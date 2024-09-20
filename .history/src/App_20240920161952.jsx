import "./App.css";
import Create from "./create";

function App() {
  export const userCollectionRef = collection(db, "record");
  console.log("user data1", userCollectionRef);
  return (
    <div className="main-container">
      <h1>CRUD Operation</h1>
      {/* <Create  refetchUser={getUsers} /> */}
      <Create />
    </div>
  );
}

export default App;
