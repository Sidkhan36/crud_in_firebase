import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { async } from "@firebase/util";



const AddNew = () => {
  const [newAge, setNewAge] = useState("");
  const [newName, setNewName] = useState(0);

  const usersCollectionRef = collection(db, "users");

  const createUser  = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: newAge});
  }

  return (
    <div className="addnew">
      <input type="text" placeholder="Name..." onChange={(event) => {
        setNewName(event.target.value)
      }} />
      <input type="number" placeholder="Age..." onChange={(event) => {
        setNewAge(event.target.value)
      }}/>
      <button onClick={createUser}>Add New</button>
    </div>
  );
};

export default AddNew;
