import React from "react";
import { useState } from "react";
import { userCollectionRef } from "./App";
import { addDoc } from "firebase/firestore";
import "./create.css";
// Product -> list, Add, Edit, delete Paramater: Product Name (type: string), Price (type: number), Old Price (type: number), Category type (type: select), is active (type: checkbox), description (type: textarea) Category list => Vegetables, Fruits & Nuts, Dairy & creams, Packages Food , Staples
const Create = ({ refetchUser }) => {
  const [ProductName, setProductName] = useState("");
  const [Price, setPrice] = useState();
  const [oldPrice, setOldPrice] = useState();
  const [Categorytype, setCategorytype] = useState();
  const [isactive, setisActive] = useState();
  const [description, setDescription] = useState();

  //   const data1 = {
  //     Name: name,
  //     Age: age,
  //     Email: email,
  //     Pnumber: pnumber,
  //   };

  //   const handleClick = async () => {
  //     const data = await addDoc(userCollectionRef, data1);
  //     setName("");
  //     setAge("");
  //     setEmail("");
  //     setPnumber("");

  //     // refetchUser();
  //     console.log("for create ", data);
  //   };

  return (
    <div className="main-input">
      <label htmlFor="Name">Name:</label>
      <input
        name="Name:"
        type="text"
        value={ProductName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />

      <label For="Age">Age:</label>
      <input
        type="number"
        name="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        required
      />

      <label htmlFor="Email">Email:</label>
      <input
        type="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="Phone Number">Phone Number:</label>
      <input
        type="number"
        name="Phone Number"
        value={pnumber}
        onChange={(e) => setPnumber(Number(e.target.value))}
        required
      />
      <input type="submit" onClick={handleClick} />
    </div>
  );
};

export default Create;
