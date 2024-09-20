import "./App.css";

function App() {
  return (
    <div className="main-container">
      <h1>CRUD Operation</h1>
      {/* <Create  refetchUser={getUsers} /> */}
      <Create />
      <br />
      <table border={1}>
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {user.map((u) => {
            console.log(u);
            return (
              <tr key={u.id}>
                <td>{u.Name}</td>
                <td>{u.Age}</td>
                <td>{u.Email}</td>
                <td>{u.Pnumber}</td>
                <td>
                  <button
                    onClick={() => updateInput(u.id, u.Name, u.Age, u.Email)}
                    style={{ backgroundColor: "lightgreen" }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(u.id)}
                    style={{ backgroundColor: "#ff0000" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
