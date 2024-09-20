import React from "react";
import { useState } from "react";
import { userCollectionRef } from "./App";
import { addDoc } from "firebase/firestore";
import "./App";
// Product -> list, Add, Edit, delete Paramater: Product Name (type: string), Price (type: number), Old Price (type: number), Category type (type: select), is active (type: checkbox), description (type: textarea) Category list => Vegetables, Fruits & Nuts, Dairy & creams, Packages Food , Staples
const Create = ({ refetchUser }) => {
  const [ProductName, setProductName] = useState("");
  const [Price, setPrice] = useState();
  const [oldPrice, setOldPrice] = useState();
  const [Categorytype, setCategorytype] = useState();
  const [isactive, setisActive] = useState();
  const [description, setDescription] = useState();

  const data1 = {
    ProductName,
    Price,
    oldPrice,
    Categorytype,
    isactive,
    description,
  };

  const handleClick = async () => {
    const data = await addDoc(userCollectionRef, data1);
    setProductName("");
    setPrice("");
    setOldPrice("");
    setCategorytype("");
    setisActive("");
    setDescription("");

    // refetchUser();
    // console.log("for create ", data);
  };

  return (
    <div className="main-input">
      <label>ProductName:</label>
      <input
        name="Name:"
        type="text"
        value={ProductName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <label>Price:</label>
      <input
        type="number"
        name="Age"
        value={Price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <label>OldPrice:</label>
      <input
        type="number"
        value={oldPrice}
        onChange={(e) => setOldPrice(e.target.value)}
        required
      />

      <label>Categorytype</label>
      <select
        name=""
        id=""
        value={Categorytype}
        onChange={(e) => setCategorytype(e.target.value)}
        required
      >
        <option value="">Vegetables</option>
        <option value="">Fruits & Nuts</option>
        <option value="">Dairy & creams</option>
        <option value="">Packages Food</option>
        <option value=""> Staples</option>
      </select>

      <label>Isactive</label>
      <input
        type=""
        name="Phone Number"
        value={isactive}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label>Description</label>
      <input
        type="text"
        name="Phone Number"
        value={description}
        onChange={(e) => setisActive(Number(e.target.value))}
        required
      />
      <input type="submit" value={"ADD"} onClick={handleClick} />
    </div>
  );
};

export default Create;
